const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: "mindflip93@gmail.com",
      subject: "Thanks for joining in!",
      text: `Welcome to the app, ${name}. Let me know you get aling with the app`,
    });
  } catch (error) {
    console.log(err);
  }
};

const sendCancelationEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: "mindflip93@gmail.com",
      subject: "Sorry to see you go!",
      text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
    });
  } catch (error) {
    console.log(err);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
