const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  address: String,
  phone: Number,
});

const MyModel = mongoose.model("users", userSchema);

module.exports = MyModel;
