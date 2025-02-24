const router = require("express").Router();
const { getAllCategories } = require("../controllers/category-controllers");
const { getCategorybyId } = require("../controllers/category-controllers");
const { addCategory } = require("../controllers/category-controllers");
const { updateCategoryById } = require("../controllers/category-controllers");
const { deleteCategoryById } = require("../controllers/category-controllers");

router.get("/", (req, res) => {
  getAllCategories(req, res);
});

// yang bawah ganti pakai id, kirim respon berikut dengan data news, join, nama kategori

router.get("/:id", (req, res) => {
  getCategorybyId(req, res);
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
