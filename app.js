
const express = require("express"); // Importing express module
const app = express(); // Creating an express application
const cookieParser = require("cookie-parser"); // Importing cookie-parser module
const path = require("path"); // Importing path module
const expressSession = require("express-session");
const flash = require("connect-flash");


const db = require("./config/mongoose-connection")
const ownersRouter = require("./routes/ownersRouter");

const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const indexRouter = require("./routes/index");


require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.use(expressSession({
  resave:false,
  saveUninitialized:false,
  secret:process.env.EXPRESS_SESSION_SECRET,
})
);
app.use(cookieParser());
app.use(flash());

app.use('/owners', ownersRouter); 
app.use('/users',usersRouter),
app.use('/products',productsRouter),
app.use("/",indexRouter)


app.listen(3000, () => {
  console.log("Server is running on port log 3000");
});
