const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "alessia.ullrich@ethereal.email",
    pass: "6HT5MXPDnznunGGZwn",
  },
});
