const router = require("express").Router();
const categories = require("./category-routes");
const pool = require("../database/database");
const { getAllNews } = require("../controllers/news-controllers");
const { getNewsBySlug } = require("../controllers/news-controllers");
const { addNews } = require("../controllers/news-controllers");
const { updateNewsBySlug } = require("../controllers/news-controllers");
const { deleteNewsBySlug } = require("../controllers/news-controllers");

router.use("/category", categories);

router.get("/", (req, res) => {
  getAllNews(req, res);
});

router.get("/:slug", (req, res) => {
  getNewsBySlug(req, res);
});

router.post("/", (req, res) => {
  addNews(req, res);
});

router.patch("/:slug", (req, res) => {
  updateNewsBySlug(req, res);
});

router.delete("/:slug", (req, res) => {
  deleteNewsBySlug(req, res);
});

module.exports = router;
