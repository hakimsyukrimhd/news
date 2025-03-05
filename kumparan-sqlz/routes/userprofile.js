const router = require("express").Router();
const { getProfile } = require("../controller/userprofile-controller");

router.get("/", (req, res) => {
  getProfile(req, res);
});

module.exports = router;
