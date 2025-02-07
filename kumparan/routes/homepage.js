const router = require("express").Router();
const news = require("./news");
const user = require("./users");

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "Welcome to HomePage",
  });
});

router.use("/news", news);
router.use("/users", user);

module.exports = router;
