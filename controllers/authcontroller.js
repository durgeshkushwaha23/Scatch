const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {genratetoken} = require("../utils/genratetoken")
require('dotenv').config();

module.exports.registeruser = async function(req, res) {
    try {
      let { email, fullname, password } = req.body;
  
      // Validate the input
      if (!email || !fullname || !password) {
        return res.status(400).send({ error: "All fields are required." });
      }
  
      // Check if the email is already registered
      let existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).send({ error: "Email is already registered." });
      }
  
      // Hash the password before saving
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create the user
      let user = await userModel.create({
        fullname,
        email,
        password: hashedPassword
      });
  
      // Generate JWT token
      const token = genratetoken(user);
  
      res.status(201).send({ user, token });
    } catch (err) {
      if (err.code === 11000) {
        // Handle duplicate key error
        res.status(400).send({ error: "Email is already registered." });
      } else {
        console.log(err.message);
        res.status(500).send({ error: "Internal server error." });
      }
    }
  };

  module.exports.loginUser = async function(req,res){
     let { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email: email });
    if (!user) {
      return res.send("Email or password incorrect");
      
    }

    bcrypt.compare(password, user.password, function(err, result) {
      if (err) {
        return res.send("An error occurred while comparing passwords");
      }
      if (result) {
        let token = genratetoken(user);
        res.cookie("token", token);
        res.redirect("/shop");
      } else {
        res.send("Email or password incorrect");
      }
    });
  } catch (error) {
    res.send("An error occurred while logging in");
  }
  };

module.exports.logout = async function(req,res){
  res.cookie("token","");
  res.redirect("/");
}  
  
