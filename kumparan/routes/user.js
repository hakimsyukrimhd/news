const router = require("express").Router();

router.post("/register", (req, res) => {
  const userBody = req.body;
});

router.post("/login", (req, res) => {
  const userBody = req.body;
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
});

router.patch("/:id", (req, res) => {
  const userId = req.params.id;
  const userBody = req.body;
});
router.delete("/:id", (req, res) => {
  const userId = req.params.id;
});

module.exports = router;
