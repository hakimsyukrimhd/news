const router = require("express").Router();

router.get("/register", (req, res) => {
  res.status(200).json({
    message: "Welcome to Users",
  });
});

module.exports = router;
