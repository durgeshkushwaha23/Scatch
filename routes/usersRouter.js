const express = require("express");
const router = express.Router();
const {registeruser,loginUser,logout} = require("../controllers/authcontroller")



router.get("/", (req, res) => {
  res.send("mai to");
});

router.post("/register", registeruser );
router.post("/login", loginUser );

router.get("/logout",logout);

module.exports = router;
