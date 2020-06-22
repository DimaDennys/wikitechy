const events = require('events');
const myEvents = events.EventEmitter;
const myLogger = new myEvents;

myLogger.on('err', errLogger);
myLogger.on('error', errorLogger);

myLogger.emit('err', 'Error 1');
myLogger.emit('error', 'Error 2');

function errLogger(message) {
    console.log('err ', message);
}

function errorLogger(message) {
    console.log(message);
}
