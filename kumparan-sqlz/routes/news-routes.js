const router = require("express").Router();
const category = require("./category-routes");

router.use("/categories", category);

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to News",
  });
});

module.exports = router;
