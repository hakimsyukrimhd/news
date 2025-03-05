const router = require("express").Router();
const { getAllNews } = require("../controller/news-controller");
const { getNewsBySlug } = require("../controller/news-controller");
const { addNews } = require("../controller/news-controller");
const { updateNews } = require("../controller/news-controller");
const { deleteNews } = require("../controller/news-controller");
const auth = require("../middleware/authentication");
const authO = require("../middleware/authorization");

router.get("/", (req, res) => {
  getAllNews(req, res);
});

router.get("/:slug", (req, res) => {
  getNewsBySlug(req, res);
});

router.post("/", auth, authO, (req, res) => {
  addNews(req, res);
});

router.patch("/:slug", (req, res) => {
  updateNews(req, res);
});

router.delete("/:slug", (req, res) => {
  deleteNews(req, res);
});

module.exports = router;
