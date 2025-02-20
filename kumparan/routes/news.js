const router = require("express").Router();
const categories = require("./category");
const pool = require("../database/database");

router.use("/category", categories);

router.get("/", (req, res) => {
  const result = pool.query("select * from news");
  res.json(result.rows);
});

router.get("/:slug", (req, res) => {
  const newsParams = req.params.slug;
});

router.post("/", (req, res) => {
  const newsBody = req.body;

  const lengthbody = (obj) => {
    return Object.keys(obj).length;
  };

  if (lengthbody(newsBody) < 5) {
    res.status(404).json({
      massage: "Data yang anda masukkan tidak lengkap!",
    });
  }
});

router.patch("/:slug", (req, res) => {
  const newsParams = req.params.slug;
  const newsBody = req.body;
});

router.delete("/:slug", (req, res) => {
  const newsParams = req.params.slug;
});

module.exports = router;
