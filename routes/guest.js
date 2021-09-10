const mongoose = require('mongoose');
const Guest = require('../models/guest');
const nodemailer = require('nodemailer');

async function sendMessage(req, res) {
    let { name, email, subject, message } = req.body;

    let guest = new Guest({
        name,
        email,
        subject,
        message,
    });
    await guest.save();
    console.log('saved in DB');
    try {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'iamyourmailer@gmail.com',
                pass: 'IAmYourMailer',
            },
            tls: {
                rejectUnathorized: false,
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `${name} <${email}>`, // sender address
            to: 'abhijeetaman007@gmail.com', // list of receivers
            subject: `${subject}`, // Subject line
            // text: `${message} ${email}`, // plain text body
            html: `<p><b>Hey Abhijeet someone wants to connect!</b></p><p><b>Message : </b>${message}</p><br/><p><b>From : </b>${name}, ${email}</p>`, // html body
        });

        res.send({ success: true, msg: 'Message sent' });
    } catch (err) {
        console.log(err);
        return res.send({ success: false, msg: 'Server Error' });
    }
}

module.exports = { sendMessage };
