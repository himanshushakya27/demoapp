const fs = require('fs');
const streamRoute = require("express").Router();

streamRoute.get("/getStream", async function(req,res){

  const readStream = fs.createReadStream("./src/stream/file.txt",'utf8');
  readStream.on('data', (chunk) => {
    res.write(chunk)
  });
  readStream.on('end', (chunk) => {
    res.end()
  });
  
});

streamRoute.post("/addStream", async function(req,res){

  let writeStream = fs.createWriteStream("./src/stream/file2.txt",'utf8')  

  writeStream.write("new line added")

  res.send("task completed")
  
});

module.exports = streamRoute;
