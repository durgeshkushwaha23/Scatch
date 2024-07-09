const express =require('express');
const router = express.Router();
const ownermodel = require("../models/owner-model")


if(process.env.NODE_ENV==="development"){
    router.post("/create", async function(req,res){
  let owners = await ownermodel.find();
  if(owners.length>0){
    return res
    .status(504)
    .send("you do not have permission to create a new owner.")
  } 
 let {fullname,email,password}=req.body;


 let cratedowner = await ownermodel.create({
    fullname,
    email,
    password,
});
  res.status(201).send(cratedowner)
    })
}


router.get("/",function(req,res){
    res.send("hey")
})




module.exports = router