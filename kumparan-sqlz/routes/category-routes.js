const router = require("express").Router();
const { getAllCategory } = require("../controller/category-controlller");
const { getCategoryById } = require("../controller/category-controlller");
const { addCategory } = require("../controller/category-controlller");
const { updateCategoryById } = require("../controller/category-controlller");
const { deleteCategoryById } = require("../controller/category-controlller");

router.get("/", (req, res) => {
  getAllCategory(req, res);
});

router.get("/:id", (req, res) => {
  getCategoryById(req, res);
});

router.post("/", (req, res) => {
  addCategory(req, res);
});

router.patch("/:id", (req, res) => {
  updateCategoryById(req, res);
});

router.delete("/:id", (req, res) => {
  deleteCategoryById(req, res);
});

module.exports = router;
