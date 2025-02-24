const router = require("express").Router();
const { userRegister } = require("../controllers/users-controllers");
const { userLogin } = require("../controllers/users-controllers");
const { userGetById } = require("../controllers/users-controllers");
const { userUpdateByid } = require("../controllers/users-controllers");
const { userDeleteById } = require("../controllers/users-controllers");

// USER REGISTER
router.post("/register", (req, res) => {
  userRegister(req, res);
});

// USER LOGIN
router.post("/login", (req, res) => {
  userLogin(req, res);
});

// GET USER BY ID
router.get("/:id", (req, res) => {
  userGetById(req, res);
});

// UPDATE USERS BY ID
router.patch("/:id", (req, res) => {
  userUpdateByid(req, res);
});

// DELETE USER BY ID
router.delete("/:id", (req, res) => {
  userDeleteById(req, res);
});

module.exports = router;
