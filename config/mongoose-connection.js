
require('dotenv').config();
const mongoose = require('mongoose');
const degr = require("debug")("development:mongoose");
const config = require("config")

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){   
// degr("connected");
})
.catch(function(err){
degr(err);
})


module.exports = mongoose.connection