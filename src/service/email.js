import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vanmakdavid.lwg@gmail.com",
    pass: "Chlo020491", // naturally, replace both with your real credentials or an application-specific password
  },
});

const mailOptions = {
  from: "vanmakdavid.lwg@gmail.com",
  to: "kikopoppo@gmail.com",
  subject: "New message from Portfolio",
  text: "Dudes, we really want you !.",
};

export const testFunction = () => {
  alert("TA MERE");
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
