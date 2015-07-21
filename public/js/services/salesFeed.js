var base = require('../baseModule.js');
var moment = require('../../bower_components/moment/moment.js');
var $ = require("../../bower_components/jquery/dist/jquery.js");

/* 
    This factory simulates new purchases every so often.

    Here I will simulate server push to avoid polling

    Most of the code before "module.exports" represents
    what's on the server.
*/

var messageFromCustomer = [
    "I drank 2 of these and passed the bar exam!",
    "I can multitask!",
    "I can fly!",
    "I can has rocket science!",
    "I built a time machine!",
    "I can talk to animals!",
    "I can speak robot!",
    "I can breathe under water!",
    "I created a nuclear reactor in my basement!",
    "I got abducted by aliens!",
    "I invented a cure for laziness!",
    "I'm not confused anymore!",
    "Speak like Yoda, I can!"
]

messageFromCustomer = chance.shuffle(messageFromCustomer);
var messageIndex = 0;


var serverFeedData = [];

// Put the author in the story, of course.
serverFeedData.push(getTimeAgnosticPurchaseDetails());

// override the defaults
var me = serverFeedData[0];
me.name = "Bill";
me.city = "Woolwich";
me.country = "United States";
me.time = moment().subtract(1, 'minutes');

function getTimeAgnosticPurchaseDetails() {
    return {
        name: chance.first(),
        quantity: chance.integer({min:3, max:30}),
        city: chance.city(),
        country: chance.country({full: true}),
        message: getMessage()
    }
}

function getTimeAgnosticPurchaseDetails() {
    return {
        name: chance.first(),
        quantity: chance.integer({min:3, max:30}),
        city: chance.city(),
        country: chance.country({full: true}),
        message: getMessage()
    }
}


/*
    This section generates past purchases 
    ranging from 12 hours ago to now.
*/

function getPastTime() {
    // There are 43,200,000 milliseconds in 12 hours.
    var randUpTo1Month = chance.integer({min: 1, max: 43200000});
    return new moment().subtract(randUpTo1Month, 'milliseconds');
}

function getOldPurchase(customDetails) {
    var purchase;
    if(typeof customDetails != "undefined") {
        purchase = customDetails
    } else {
        purchase = getTimeAgnosticPurchaseDetails();
    }

    purchase.time = getPastTime();

    return purchase;
}

// generate 10 old purchases
var numPastPurchases = 10;
for(var i=0; i<numPastPurchases; i++) {
    serverFeedData.push(getOldPurchase());
}

// sort by oldest to newest time
serverFeedData.sort(function(a, b) {
    if(a.time < b.time) {
        return 1;
    } else {
        return -1;
    }
})

/* 
    Messages have to be added after sorting by time
    so duplicates don't show up near eachother
*/

function getMessage() {
    if(messageIndex == messageFromCustomer.length) {
        messageIndex = 0;
    }
    var message = messageFromCustomer[messageIndex];
    messageIndex++;
    return message;
}

serverFeedData.reverse();
serverFeedData.map(function(purchase) {
    purchase.message = getMessage();
})
serverFeedData.reverse();


// Let's add a special guest!
var zombie = serverFeedData[1];
zombie.name = "Mr. Zombie";
zombie.city = "Zombieland";
zombie.country = "United States";
zombie.quantity = chance.integer({min: 40, max: 60});
zombie.time = moment().subtract(5, 'minutes');
zombie.message = "I crave Brain Nectar!"



/*
    This section simulates live updates
    of new purchases while on the site
*/

function getNewPurchase() {
    var purchase = getTimeAgnosticPurchaseDetails();
    purchase.time = new moment();
    return purchase;
}

function getRandTimeDelay() {
    return chance.integer({min: 10000, max: 30000});
}

var maxFuturePurchases = 40; // let's only allow 40 new ones
var futurePurchasesSimulated = 0;

// This is where the magic happens
function simulateNewPurchase() {
    if(futurePurchasesSimulated == maxFuturePurchases) {
        /* This updates moment.js's .fromNow() relative time message parsing 
            i.e. "a couple seconds ago", "6 hours ago"
            after I've added the max amount of new purchases.
        */
        base.emitter.emit("serverPushMessage", serverFeedData);
        return;
    }
    setTimeout(function() {
        serverFeedData.unshift(getNewPurchase());
        if(serverFeedData.length > 20) {
            serverFeedData.pop();
        }
        base.emitter.emit("serverPushMessage", serverFeedData);
        simulateNewPurchase();
    }, getRandTimeDelay())
}

// kickoff!
simulateNewPurchase();


/*
    All the code below represents what's on the front end.
*/

var frontEndCallback;

base.emitter.on("serverPushMessage", function(data) {
    console.log("Got server push message.");
    runFrontEndCallback(data);
});

function runFrontEndCallback(data) {
    console.log("serverFeedData length: " + data.length);
    frontEndCallback(data);
}

module.exports = function() {

    function simLatency(callback) {
        setTimeout(function() {
            callback();
        },chance.integer({min: 500, max: 1000}))
    }

    return {
        getDataAndBindCallbackForServerPush: function(callback) {
            frontEndCallback = callback;
            simLatency(function() {
                runFrontEndCallback(serverFeedData);
            })        
        }
    }
}
