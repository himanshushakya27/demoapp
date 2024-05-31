var fileRoute = require('express').Router();
const fs = require("fs");

fileRoute.post("/addFile",async (req,res)=>{
 
  await fs.writeFile(req.body.path,req.body.text,
  (e)=>{
    if(e){
      console.log(e)
      res.send({message:"errr",data:e})
    }else{
      res.send({message:"completed operation"})
    }
      
    })
})

fileRoute.get("/getFile",async (req,res)=>{
  console.log(req.query);
  await  fs.readFile(req.query.path,"utf-8",(e, result)=>{
      if(e){
        console.log("error",e)
        res.send({message:"errr",data:e})
      }else{
        res.send({data: result})
        console.log(result);
      }
    })
})

fileRoute.put("/updateFile",async (req,res)=>{
  console.log(req.body);
  await  fs.appendFile(req.body.path,req.body.text,(e)=>{
      if(e){
        console.log("error",e)
        res.send({message:"errr",data:e})
      }else{
        res.send({message:"updated file"})
      }
    })
})

fileRoute.delete("/deleteFile",async (req,res)=>{
  console.log(req.body);
  await  fs.unlink(req.body.path,(e)=>{
      if(e){
        console.log("error",e)
        res.send({message:"errr",data:e})
      }else{
        res.send({message:"deleted file"})
      }
    })
})

fileRoute.post("/addFolder",async (req,res)=>{
 
  await fs.mkdir(req.body.path,{recursive:true},
  (e)=>{
    if(e){
      console.log(e)
      res.send({message:"errr",data:e})
    }else{
      res.send({message:"completed operation"})
    }
      
    })
})

fileRoute.get("/getFolder",async (req,res)=>{
  console.log(req.query);
  await  fs.readdir(req.query.path,
    { withFileTypes: true }, 
    (e, files)=>{
      if(e){
        console.log("error",e)
        res.send({message:"errr",data:e})
      }else{
        res.send({data: files})
        console.log(files);
      }
    })
})

fileRoute.delete("/deleteFolder",async (req,res)=>{
  console.log(req.body);
  await  fs.rmdir(req.body.path,(e)=>{
      if(e){
        console.log("error",e)
        res.send({message:"errr",data:e})
      }else{
        res.send({message:"deleted flder"})
      }
    })
})

module.exports = fileRoute