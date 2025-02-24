const router = require("express").Router();
const news = require("./news-routes");
const user = require("./users-routes");

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "Welcome to HomePage",
  });
});

router.use("/news", news);
router.use("/users", user);

module.exports = router;
