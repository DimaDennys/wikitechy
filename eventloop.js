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
var eventEmitter = new events.EventEmitter();
//Create an event handler for connnectHandler
eventEmitter.on('connection', connnectHandler);

// Bind the data event
const dataReceivedHandler = function (){
    console.log('Data received');
}

// Create an event handler for dataReceivedHandler
eventEmitter.on('data_received', dataReceivedHandler);
// Fire the connection event
eventEmitter.emit('connection');
eventEmitter.emit('data_received');
// Bind the connection event
function connnectHandler(){
    console.log('Connection established');
}