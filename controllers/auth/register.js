var express = require('express');
var router = express.Router();
const User = require("../../models").User;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

/* GET users listing. */


 const register = async(req, res, next)=>{
  //res.status(201).json(req.body);
  //add new user and return 201
 
 
  const salt = await bcrypt.genSalt(10);
  var usr = {
    name : req.body.name,
    email : req.body.email,
    password : req.body.password,
    verified : false
  };

 console.log("hash decrupt check")
  console.log(usr.password);
  created_user = await User.create(usr);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",// upgrade later with STARTTLS
    auth: {
      user: "viblecreators@gmail.com",
      pass: "xbalicihgvtgmgcn",
    },
  });

  const token = jwt.sign({ "id": created_user.id }, process.env.SECRET, { expiresIn: '5m' });


  const mailOptions = {
    from: 'viblecreators@gmail.com',
    to: created_user.email,
    subject: 'Email Verification',
    html: `
      <h1>Welcome to Your App!</h1>
      <p>Please click the following link to verify your email:</p>
      <a href="http://localhost:5000/api/auth/confirm/${token}">Verify Email</a>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             console.error('Error sending verification email:', error);
             return res.status(500).json({ message: 'Failed to send verification email' });
         }
         console.log('Verification email sent:', info.response);
         res.status(201).json({ message: 'User registered successfully' });
     });




  res.status(201).json(created_user);
};

const confirm = async (req, res) => {
    const token  = req.params.id;
    console.log(req.params.id);
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      console.log(decoded);
      const userId = decoded.id;
  
      // Find the user by ID
      const user = await User.findOne({where : {id : userId}});
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Mark the user as verified
      user.verified = true;
      await user.save();
  
      res.status(200).json({ message: 'Email verification successful' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

const forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ where :{email : email} });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Generate password reset token
      const token = jwt.sign({ userId: user.id }, process.env.SECRET, { expiresIn: '1h' });
  
      // Send password reset email
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",// upgrade later with STARTTLS
        auth: {
          user: "viblecreators@gmail.com",
          pass: "xbalicihgvtgmgcn",
        },
      });
      const mailOptions = {
        from: 'viblecreators@gmail.com',
        to: email,
        subject: 'Password Reset',
        html: `
          <h1>Reset Your Password</h1>
          <p>Please click the following link to reset your password:</p>
          <a href="http://localhost:5000/api/auth/resetpass/${token}">Reset Password</a>
        `,
      };
  
      await transporter.sendMail(mailOptions);
  
      console.log('Password reset email sent');
      res.status(200).json({ message: 'Password reset email sent' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
const resetpass  = async (req, res) => {
    const token = req.params.id;
    console.log(token);
    const password = req.body.password;
  
    try {
      // Verify and decode the reset token
      const decoded = jwt.verify(token, process.env.SECRET);
      const userId = decoded.userId;
    console.log(decoded);
      // Find the user by ID
      const user = await User.findOne({where : {id : userId}});
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update the user's password
      user.password = password;
      await user.save();
  
      res.status(200).json({ message: 'Password reset successful' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // ...

  
  
  

module.exports = {
    register,
    confirm,
    forgotPassword,
    resetpass
}
