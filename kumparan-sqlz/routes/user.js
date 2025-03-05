const router = require("express").Router();
const userProfile = require("./userprofile");
const { userRegister } = require("../controller/user-controller");
const { userLogin } = require("../controller/user-controller");
const { getUser } = require("../controller/user-controller");
const { updateUser } = require("../controller/user-controller");
const { deleteUser } = require("../controller/user-controller");

router.post("/register", (req, res) => {
  userRegister(req, res);
});

router.post("/login", (req, res) => {
  userLogin(req, res);
});

router.get("/:id", (req, res) => {
  getUser(req, res);
});

router.patch("/:id", (req, res) => {
  updateUser(req, res);
});

router.delete("/:id", (req, res) => {
  deleteUser(req, res);
});

router.use("/profile", userProfile);

module.exports = router;
