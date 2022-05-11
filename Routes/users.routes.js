const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controllers");

router.get("/", userController.allUsers);

router.post("/users", userController.addUsers);

router.put("/users", userController.updateUsers);

router.delete("/users", userController.deleteUsers);

module.exports = router;
