var base = require('../baseModule.js');
var moment = require('../../bower_components/moment/moment.js');
var $ = require("../../bower_components/jquery/dist/jquery.js");

/* 
    This factory simulates new purchases every so often.

    Here I will simulate server push to avoid polling

    Most of the code before "module.exports" represents
    what's on the server.
*/


// Put the author in the story, of course.
var serverFeedData = [{
    name: "Bill",
    quantity: chance.integer({min:1, max:30}) * 6,
    city: "Woolwich",
    country: "United States",
    time: getPastTime()
}];

function getTimeAgnosticPurchaseDetails() {
    return {
        name: chance.name,
        quantity: chance.integer({min:1, max:30}) * 6,
        city: chance.city(),
        country: chance.country({full: true})
    }
}



/*
    This section generates past purchases 
    ranging from yesterday to today.
*/

function getPastTime() {
    // There are 86,400,000 milliseconds in a day.
    var randUpTo1Month = chance.integer({min: 1, max: 86400000});
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

var numFuturePurchases = 14;
var futurePurchasesSimulated = 0;

// This is where the magic happens
function simulateNewPurchase() {
    if(futurePurchasesSimulated == numFuturePurchases)
        return;
    setTimeout(function() {

        serverFeedData.push(getNewPurchase());
        console.log("Send server push message.");
        base.emitter.emit("serverPushMessage", serverFeedData);
        $(document).trigger("serverPushMessage", serverFeedData);
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
