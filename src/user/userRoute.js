var userRoute = require('express').Router();
var userController = require('./userController')

userRoute.post("/addUser",userController.addUser)

userRoute.get("/getUser",userController.getUser)

userRoute.put("/updateUser/:id",userController.updateUser)

userRoute.delete("/deleteUser/:id",userController.deleteUser)

module.exports = userRoute