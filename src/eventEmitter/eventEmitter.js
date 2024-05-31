const eventRoute = require("express").Router();
const EventEmitter = require('events');
const event = new EventEmitter();

event.on("call",()=>{
  console.log("call event happened");
})

eventRoute.post("/addEvent", function(req,res){
  res.send("event api") 
  event.emit("call")
});

module.exports = eventRoute;

