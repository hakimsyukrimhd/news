const router = require("express").Router();
const news = require("./news");
const user = require("./user");

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "Welcome to HomePage",
  });
});

router.use("/news", news);
router.use("/user", user);

module.exports = router;
