const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "All of Categories will display here",
  });
});

router.get("/:slug", (req, res) => {
  const newsParams = req.params.slug;
});

router.post("/", (req, res) => {
  const newsBody = req.body;
});

router.patch("/:id", (req, res) => {
  const newsParams = req.params.id;
  const newsBody = req.body;
});

router.delete("/:id", (req, res) => {
  const newsParams = req.params.id;
});

module.exports = router;
