const router = require("express").Router();
const { getAllCategories } = require("../controllers/category-controllers");
const { getCategorybyId } = require("../controllers/category-controllers");
const { addCategory } = require("../controllers/category-controllers");
const { updateCategoryById } = require("../controllers/category-controllers");
const { deleteCategoryById } = require("../controllers/category-controllers");

// GET ALL CATEGORIES
router.get("/", (req, res) => {
  getAllCategories(req, res);
});

// GET CATEGORY BY ID
router.get("/:id", (req, res) => {
  getCategorybyId(req, res);
});

// ADD CATEGORY
router.post("/", (req, res) => {
  addCategory(req, res);
});

// UPDATE CATEGORIE BY ID
router.patch("/:id", (req, res) => {
  updateCategoryById(req, res);
});

// DELETE CATEGORY BY ID
router.delete("/:id", (req, res) => {
  deleteCategoryById(req, res);
});

module.exports = router;
