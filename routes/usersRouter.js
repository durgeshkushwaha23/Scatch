const express = require("express");
const router = express.Router();
const {registeruser} = require("../controllers/authcontroller")



router.get("/", (req, res) => {
  res.send("mai to");
});

router.post("/register", registeruser );

module.exports = router;
