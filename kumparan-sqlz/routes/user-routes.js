const { Model } = require("sequelize");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Users",
  });
});

module.exports = router;
