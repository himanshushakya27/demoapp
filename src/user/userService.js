const userSchema = require('./userModel');

module.exports = {
  addUser: async (body)=>{
      const data = {
        name : body.name,
        email : body.email,
        address : body.address,
      }
    const result = await new userSchema(data).save()  
    return result;
  },
  getUser: async ()=>{
      
    const result = await userSchema.find({}) 
    
    return result;
  },
  updateUser: async (id,body)=>{
      
    const result = await userSchema.findByIdAndUpdate(
      {_id: id},
      {$set: body},
      {new: true}
    ) 
    
    return result;
  },
  deleteUser: async (id)=>{
      
    const result = await userSchema.findByIdAndDelete({_id:id}) 

    return result;
  },

}