const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "All of news will display here",
  });
});

module.exports = router;
