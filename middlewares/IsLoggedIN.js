const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async function(req,res,next){
    if(!req.cookies.token){
       return req.flash("error","you need to login first");
        return res.redirect("/")
    };
try{
    let decode = jwt.verify(req.cookies.token,process.env.JWT_KEY);
    let user = await userModel.findOne({email:decode.email}).select("-password");
    req.user = user;
    next()
}
catch(err){
    req.flash("err","something is wrong");
    res.redirect("/");
}
}