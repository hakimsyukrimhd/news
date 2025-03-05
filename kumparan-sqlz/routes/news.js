const router = require("express").Router();
const { getAllNews, getNewsBySlug, addNews, updateNews, deleteNews } = require("../controller/news-controller");
const { verifyToken } = require("../middlewares/authentication");
const { checkRole } = require("../middlewares/authorization");

router.get("/", getAllNews);

router.get("/:slug", getNewsBySlug);

router.post("/", verifyToken, checkRole("reporter"), addNews);

router.patch("/:slug", verifyToken, checkRole("reporter"), updateNews);

router.delete("/:slug", verifyToken, checkRole("reporter", "admin"), deleteNews);

module.exports = router;
