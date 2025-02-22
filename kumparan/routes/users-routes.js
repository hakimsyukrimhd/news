const router = require("express").Router();
const { userRegister } = require("../controllers/users-controllers");
const { userLogin } = require("../controllers/users-controllers");
const { userGetById } = require("../controllers/users-controllers");
const { userUpdateByid } = require("../controllers/users-controllers");
const { userDeleteById } = require("../controllers/users-controllers");

router.post("/register", (req, res) => {
  userRegister(req, res);
});

router.post("/login", (req, res) => {
  userLogin(req, res);
});

router.get("/:id", (req, res) => {
  userGetById(req, res);
});

router.patch("/:id", (req, res) => {
  userUpdateByid(req, res);
});

router.delete("/:id", (req, res) => {
  userDeleteById(req, res);
});

module.exports = router;
