const events = require('events');
const mainEventEmitter = new events.EventEmitter();

const listenerOne = function(){
    console.info('1. listenerOne executed');
}

const listenerTwo = function(){
    console.info('2. listenerTwo executed');
}

mainEventEmitter.addListener('connection',listenerOne);
mainEventEmitter.on('connection', listenerTwo);

let totalListeners = require('events').EventEmitter.listenerCount(mainEventEmitter, 'connection');

console.log(`${totalListeners} listeners connected`);

mainEventEmitter.emit('connection');

mainEventEmitter.removeListener('connection',listenerOne);
console.log('one listener removed')

mainEventEmitter.emit('connection');
totalListeners = require('events').EventEmitter.listenerCount(mainEventEmitter, 'connection');

console.log(`${totalListeners} listeners connected`);
console.log('Task completed');

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // listener #1
// var listner1 = function listner1() {
//    console.log('listner1 executed.');
// }

// // listener #2
// var listner2 = function listner2() {
//   console.log('listner2 executed.');
// }

// // Bind the connection event with the listner1 function
// eventEmitter.addListener('connection', listner1);

// // Bind the connection event with the listner2 function
// eventEmitter.on('connection', listner2);

// var eventListeners = require('events').EventEmitter.listenerCount
//    (eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// // Fire the connection event 
// eventEmitter.emit('connection');

// // Remove the binding of listner1 function
// eventEmitter.removeListener('connection', listner1);
// console.log("Listner1 will not listen now.");

// // Fire the connection event 
// eventEmitter.emit('connection');

// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// console.log("Program Ended.");
