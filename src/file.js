const fs = require("fs");

//syncronusly file created
//fs.writeFileSync("./text.txt","this is my text file lines..")

//asyncronusly file created
// fs.writeFile("./text2.txt","this is my text 2 file lines...",(e)=>{
//   console.log(e)
// })

//for read file
// const result = fs.readFileSync("./data.txt","utf-8")
// console.log(result)

// fs.readFile("./data.txt","utf-8",(err, result)=>{
//   if(err){
//     console.log("error",err);
//   }else{
//     console.log(result);
//   }
// })

//up
//fs.appendFileSync('./text.txt',`\n this is new line to append`)

//delete file command
// fs.unlinkSync("./text2.txt")


// fs.mkdirSync("newFolder")

// fs.mkdirSync("./newFolder1",{recursive:true})

///////////////////////////////////////////
// fs.readdir("./newFolder1/newFoler2", (err, files) => { 
//   if (err) 
//     console.log(err); 
//   else { 
//     console.log("\nCurrent directory filenames:"); 
//     files.forEach(file => { 
//       console.log(file); 
//     }) 
//   } 
// }) 
  
// Function to get current filenames 
// in directory with "withFileTypes" 
// set to "true"  
  
// fs.readdir("./newFolder1/newFoler2",  
//   { withFileTypes: true }, 
//   (err, files) => { 
//   console.log("\nCurrent directory files:"); 
//   if (err) 
//     console.log(err); 
//   else { 
//     files.forEach(file => { 
//       console.log(file); 
//     }) 
//   } 
// }) 


// fs.rmdir("./newFolder1/newFoler2", 
//   { 
//     recursive: true, 
//   },
//   (e) => { 
//   if(e) console.log("Errorrrr:",e)
//     else console.log("folder deleted");
// }); 