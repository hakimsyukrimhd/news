const router = require("express").Router();
const news = require("./news");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Categories",
  });
});

router.use("/news", news);

module.exports = router;
