const { response } = require("express");
const userModel = require("../models/user.models");

var renderHomepage = (req, res) => {
  res.render("homepage");
};

var allUsers = (req, res) => {
  //   res.send({ msg: "userController get msg" });
  const userData = userModel.find();
  // console.log(userData);
  userData
    .then((response) => {
      // res.send(response);
      res.render("homepage", { response });
    })
    .catch((error) => {
      res.send(error);
    });
};

var addUsers = (req, res) => {
  const instance = new userModel();
  instance.name = req.body.name;
  instance.email = req.body.email;
  instance.address = req.body.address;
  instance.phone = req.body.phone;
  console.log(req.body.email);

  const insertRecord = instance.save();
  insertRecord
    .then(() => {
      console.log("Record inserted");
      // res.send({ msg: "record inserted" });
      res.send({ msg: "Record inserted" });
    })
    .catch(() => {
      console.log("Record inserted fail");
    });
};

var updateUsers = (req, res) => {
  console.log(req.body);
  const updateRecord = userModel.findByIdAndUpdate(req.body.id, req.body);

  updateRecord
    .then(() => {
      console.log("Record updated");
      // res.send({ msg: "record inserted" });
      res.send({ msg: "Record updated" });
    })
    .catch(() => {
      res.send({ msg: "Record updated fail" });
    });
};

var deleteUsers = (req, res) => {
  console.log(req.body);
  const deleteRecord = userModel.deleteOne({ id: req.body.id });
  deleteRecord
    .then(() => {
      console.log("Record Deleted");
      // res.send({ msg: "record inserted" });
      res.send({ msg: "Record Deleted" });
    })
    .catch((error) => {
      console.log(error, "Record Deleted fail");
    });
};

module.exports = {
  allUsers,
  addUsers,
  renderHomepage,
  deleteUsers,
  updateUsers,
};
