// core module
const events = require('events')

// ***how to write event listener

// ElementInternals.on('click', function(){

// });

const myEmitter = new events.EventEmitter;

myEmitter.on('test', function(arg){
    console.log(arg);
});

myEmitter.emit('test', 'hello world');