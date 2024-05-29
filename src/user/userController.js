const userService = require('./userService');

module.exports = {
  addUser: async (req,res)=>{   
      const body = {
        name : req.body.name,
        email : req.body.email,
        address : req.body.address,
      }
    const result = await userService.addUser(body)
    if(result){
    return res.status(200).json({
      data: result,
      message: "user added successfully",
      ststus: true
    })
    }else{
      return res.status(400).json({
        data: result,
        message: "failed",
        ststus: false
      })
    } 
  },
  getUser: async (req,res)=>{   
  
    const result = await userService.getUser()
    if(result){
    return res.status(200).json({
      data: result,
      message: "user data",
      ststus: true
    })
    }else{
      return res.status(400).json({
        data: result,
        message: "failed",
        ststus: false
      })
    } 
  },
  updateUser: async (req,res)=>{ 
    
    const id= req.params.id

    const body = {
      name : req.body.name,
      email : req.body.email,
      address : req.body.address,
    }
  
    const result = await userService.updateUser(id,body)
    if(result){
    return res.status(200).json({
      data: result,
      message: "user data updated",
      ststus: true
    })
    }else{
      return res.status(400).json({
        data: result,
        message: "failed",
        ststus: false
      })
    } 
  },
  deleteUser: async (req,res)=>{   

    const id= req.params.id
  
    const result = await userService.deleteUser(id)
    if(result){
    return res.status(200).json({
      data: result,
      message: "user deleted",
      ststus: true
    })
    }else{
      return res.status(400).json({
        data: result,
        message: "failed",
        ststus: false
      })
    } 
  },

}