const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
      user: 'himanshushakya940@gmail.com', //https://dev.to/documatic/send-email-in-nodejs-with-nodemailer-using-gmail-account-2gd1
      pass: 'rdnl miya dvrq fzkq' // created app password into gmail account security
  },
  tls: {
    rejectUnauthorized: false
}
});

const mailController = {
  sendMail: async (req, res) => {
    try {
     
        console.log("line 16");
        const info = await transporter.sendMail({
          from: 'ignatius.ruecker34@ethereal.email', 
          to: "himanshushakya94@gmail.com",
          subject: "testing mail", 
          // text: "email send via modemailer successful", 
          html:  `
                <title>domo title</title>    
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc;">
                  hello this mail from node mailer
                  <b>bold text</b>
                  <h1>this this h1 text</h1>
                </div>`, 
        })
        console.log("line 28");

       console.log("Message sent: %s", info.messageId);
       
        return res.status(201).json({
          data: info,
          success: true,
          message: "mail sent successfully",
        });

    }
    catch (error) 
    {
      console.log("mail controller error",error)
      return res.status(400).json({
        data: error,
        success: false,
        message: "Failed to send mail",
      });
    }
  }

};

module.exports = mailController;
