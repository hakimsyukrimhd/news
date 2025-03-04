const router = require("express").Router();
const { getAllNews } = require("../controller/news-controller");
const { getNewsBySlug } = require("../controller/news-controller");
const { addNews } = require("../controller/news-controller");

router.get("/", (req, res) => {
  getAllNews(req, res);
});

router.get("/:slug", (req, res) => {
  getNewsBySlug(req, res);
});

router.post("/", (req, res) => {
  addNews(req, res);
});
module.exports = router;
