const router = require("express").Router();
const userProfile = require("./userprofile");
const { userRegister, userLogin, getUser, updateUser, deleteUser } = require("../controller/user-controller");
const { verifyToken } = require("../middlewares/authentication");
const { checkRole } = require("../middlewares/authorization");

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/:id", getUser);

router.patch("/:id", verifyToken, checkRole("subscriber", "reporter", "admin"), updateUser);

router.delete("/:id", verifyToken, checkRole("subscriber", "reporter", "admin"), deleteUser);

router.use("/profile", userProfile);

module.exports = router;
