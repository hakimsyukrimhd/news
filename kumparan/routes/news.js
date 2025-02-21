const router = require("express").Router();
const categories = require("./category");
const pool = require("../database/database");

router.use("/category", categories);

router.get("/", async (req, res) => {
  try {
    const allOfNews = await pool.query("select * from news");
    res.status(200).json(allOfNews.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Terdapat kesalahan pada server",
    });
  }
});

router.get("/:slug", (req, res) => {
  const newsParams = req.params.slug;
});

router.post("/", (req, res) => {
  try {
    // const 
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Terdapat kesalahan pada server",
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
