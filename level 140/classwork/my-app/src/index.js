const EventEmitter = require("events");

const myEmitter = new EventEmitter();

function listener(info) {
  console.log("Received info:", info);
}

myEmitter.on("welcome", listener);

myEmitter.emit("welcome", "Hello World!");