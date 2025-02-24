const router = require("express").Router();
const categories = require("./category-routes");
const { getAllNews } = require("../controllers/news-controllers");
const { getNewsBySlug } = require("../controllers/news-controllers");
const { addNews } = require("../controllers/news-controllers");
const { updateNewsBySlug } = require("../controllers/news-controllers");
const { deleteNewsBySlug } = require("../controllers/news-controllers");

router.use("/category", categories);

// GET ALL NEWS
router.get("/", (req, res) => {
  getAllNews(req, res);
});

// GET NEWS BY SLUG
router.get("/:slug", (req, res) => {
  getNewsBySlug(req, res);
});

// ADD NEWS
router.post("/", (req, res) => {
  addNews(req, res);
});

// UPDATE NEWS BY SLUG
router.patch("/:slug", (req, res) => {
  updateNewsBySlug(req, res);
});

// DELETE NEWS BY SLUG
router.delete("/:slug", (req, res) => {
  deleteNewsBySlug(req, res);
});

module.exports = router;
