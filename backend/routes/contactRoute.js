const express= require("express");
 const router = require('express').Router();
 const nodemailer = require('nodemailer');

// Gmail account info
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
});

// Email info
const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    
      
};

// Send email 📧  and retrieve server response
 router.post('/',(req, res)=>{
     console.log(req.body)
    transporter.sendMail({...mailOptions,text:`name:${req.body.name}`,html:`<h1 style="color:#5c34a4">Hi, I'm ${req.body.name}</h1>  <h2 style="color:#5c34a4">E-mail: ${req.body.email}</h2><h3 style="color:#5c34a4">subject:${req.body.subject}</h3><h3 style="color:#5c34a4">Message: ${req.body.message}</h3>` }, function(error, info) {
       res.json(200)

        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
})

 module.exports = router;


 