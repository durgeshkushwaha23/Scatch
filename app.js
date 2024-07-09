
const express = require("express"); // Importing express module
const app = express(); // Creating an express application
const cookieParser = require("cookie-parser"); // Importing cookie-parser module
const path = require("path"); // Importing path module

const db = require("./config/mongoose-connection")
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
require('dotenv').config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use('/owners', ownersRouter); // Us
app.use('/users',usersRouter),
app.use('/products',productsRouter),


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
