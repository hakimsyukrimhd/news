const router = require("express").Router();
const users = require("./user-routes");
const news = require("./news-routes");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to homePage",
  });
});

router.use("/users", users);
router.use("/news", news);

module.exports = router;
