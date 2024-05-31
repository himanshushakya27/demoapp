const upload = require('../middleware/multer')

const fileController = require("./uploadController");

const fileRoute = require("express").Router();

fileRoute.post("/addFile", upload.single('myFile'), fileController.addFile);

module.exports = fileRoute;

