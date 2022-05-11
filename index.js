require("dotenv").config();
const express = require("express"); //import express module
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
console.log(cors());
const app = express(); // express() is top level function exported by express module
// console.log(typeof app, typeof express); // type of app and express()
const db = require("./database/database.config");
const userRouter = require("./Routes/users.routes");
// console.log(db); url testing

// loading ejs engine
app.set("view engine", "ejs");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

var mongoConnect = mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// console.log(mongoConnect); promise testing
mongoConnect
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("DB not connected", error);
  });

app.use("/", userRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Example app listening at http://${process.env.HOST}:${process.env.PORT}`
  );
});

// [
//   "Amethyst",
//   "Aquamarine",
//   "Blue Topaz",
//   "Citrine",
//   "Emerald",
//   "Garnet",
//   "Ruby",
//   "Sapphire",
//   "Tanzanite",
// ];
