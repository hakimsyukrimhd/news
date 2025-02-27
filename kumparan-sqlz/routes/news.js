const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to news",
  });
});

module.exports = router;
