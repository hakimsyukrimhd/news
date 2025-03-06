const router = require("express").Router();
const userProfile = require("./userprofile");
const { userRegister, userLogin, getUser, updateUser, deleteUser } = require("../controller/user-controller");
const { verifyToken } = require("../middlewares/authentication");
const { checkUserOwner } = require("../middlewares/authorization");

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/:id", verifyToken, checkUserOwner, getUser);

router.patch("/:id", verifyToken, checkUserOwner, updateUser);

router.delete("/:id", verifyToken, checkUserOwner, deleteUser);

router.use("/profile", userProfile);

module.exports = router;
