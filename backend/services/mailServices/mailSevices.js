const nodemailer = require("nodemailer");

// pass only email
module.exports.sendMail = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      // host: "smtp.gmail.com",
      // service: 'gmail',
      // port: 587,
      // ignoreTLS: false,
      // secure: false,
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: "upwork.clone.test@gmail.com",
        pass: "upwork.clone.test424",
      },
    });

    const mailOptions = {
      from: "upwork.clone.test@gmail.com",
      to: email,
      subject: "Upwork Will Hire You",
      html: "<h3>Congrats.</h3> <h3> You were accepted in a job <br> please!! check your account for more info </h3>",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        // return next(error);
        return (error);
      } else {
        console.log("Email sent: " + info.response);
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // resp.status(200).send("done sending email to " + req.body.email);
       return("done sending email to " + email);
      }
    });
  } catch(err){
    // return next(err);
    return (err);
  }
};
