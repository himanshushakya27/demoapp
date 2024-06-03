const mailController = require("./mailController")
const mailRouter = require("express").Router();

mailRouter.post("/sendMail", mailController.sendMail);

module.exports = mailRouter;