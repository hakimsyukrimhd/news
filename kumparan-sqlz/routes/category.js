const router = require("express").Router();
const { getCategories } = require("../controller/category-controller");
const { getCategory } = require("../controller/category-controller");
const { addCategory } = require("../controller/category-controller");
const { updateCategory } = require("../controller/category-controller");
const { deleteCategory } = require("../controller/category-controller");

router.get("/", (req, res) => {
  getCategories(req, res);
});

router.get("/:id", (req, res) => {
  getCategory(req, res);
});

router.post("/", (req, res) => {
  addCategory(req, res);
});

router.patch("/:id", (req, res) => {
  updateCategory(req, res);
});

router.delete("/:id", (req, res) => {
  deleteCategory(req, res);
});


module.exports = router;
