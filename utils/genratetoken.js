const jwt = require("jsonwebtoken");
require('dotenv').config(); 
const genratetoken = (user) => {
  const jwt_Key = process.env.JWT_KEY;
  if (!jwt_Key) {
    throw new Error('JWT_KEY environment variable is not defined');
  }

  let token = jwt.sign(
    { email: user.email, id: user._id },
    jwt_Key,
    { expiresIn: "1h" }
  );

  console.log(jwt_Key); // Ensure this is logged correctly
  return token;
};

module.exports.genratetoken = genratetoken;


