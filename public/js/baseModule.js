/*
    I keep this baseModule in case I'd like a shared event emitter
    or anything else shared amongst all modules. This would live
    outside the Angular world.
    
    I use this in the SalesFeedSrvc
*/

var events = require('node-event-emitter');

var base = {};

base.init = function() {
    console.log("baseModule init");
}

base.parent = function() {
    return Object.getPrototypeOf(this);
}

base.emitter = new events.EventEmitter();

module.exports = base;
