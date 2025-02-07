const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "All of news will display here",
  });
});

router.get("/:title", (req, res) => {
  const newsParams = req.params.title;
});

router.post("/", (req, res) => {
  const newsBody = req.body;
});

router.patch("/:title", (req, res) => {
  const newsParams = req.params.title;
  const newsBody = req.body;
});

router.delete("/:title", (req, res) => {
  const newsParams = req.params.title;
});

module.exports = router;
