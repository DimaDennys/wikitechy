// const events = require('events');
// const myEvents = events.EventEmitter;
// const myLogger = new myEvents;

// myLogger.on('err', errLogger);
// myLogger.on('error', errorLogger);

// myLogger.emit('err', 'Error 1');
// myLogger.emit('error', 'Error 2');

// function errLogger(message) {
//     console.log('err ', message);
// }

// function errorLogger(message) {
//     console.log(message);
// }

// version 2
//import events module 
const events = require('events');
// Create an eventEmitter object
const eventEmitter = new events.EventEmitter();
//Create an event handler for connnectHandler


// Bind the data event
const dataSent = eventEmitter.on('dataSent', ()=> console.log('data has been sent'));
// Create an event handler for dataReceivedHandler

// Fire the data event
eventEmitter.emit('dataSent', dataSent)

// Bind the connection event
