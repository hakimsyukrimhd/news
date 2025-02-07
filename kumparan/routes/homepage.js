const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "Welcome to HomePage",
  });
});

router.use("/news")

module.exports = router;
