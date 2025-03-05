const router = require("express").Router();
const { getCategories, getCategory, addCategory, updateCategory, deleteCategory } = require("../controller/category-controller");
const { verifyToken } = require("../middlewares/authentication");
const { checkRole } = require("../middlewares/authorization");

router.get("/", getCategories);

router.get("/:id", getCategory);

router.post("/", verifyToken, checkRole("admin"), addCategory);

router.patch("/:id", verifyToken, checkRole("admin"), updateCategory);

router.delete("/:id", verifyToken, checkRole("admin"), deleteCategory);

module.exports = router;
