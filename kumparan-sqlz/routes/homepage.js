const router = require("express").Router();
const users = require("./user");
const categories = require("./category");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to HomePage",
  });
});

router.use("/user", users);
router.use("/category", categories);

module.exports = router;
