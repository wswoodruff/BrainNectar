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
