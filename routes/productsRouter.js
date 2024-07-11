const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.post("/", upload.single("image"), async (req, res) => {
try{
  let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

  await productModel.create({
    image: req.file.buffer,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor,
  });
  req.flash("success","product created")
  
  res.redirect("/owners/admin");
}
catch(err){
  res.send(err)
}
});

