const router = require("express").Router();
const categories = require("./category");

router.use("/category", categories);

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "All of news will display here",
  });
});

router.get("/:slug", (req, res) => {
  const newsParams = req.params.slug;
});

router.post("/", (req, res) => {
  const newsBody = req.body;
});

router.patch("/:slug", (req, res) => {
  const newsParams = req.params.slug;
  const newsBody = req.body;
});

router.delete("/:slug", (req, res) => {
  const newsParams = req.params.slug;
});


module.exports = router;
