const router = require("express").Router();
const categories = require("./category");
const pool = require("../database/database");
const { getNews } = require("../controllers/news-controllers");

router.use("/category", categories);

// user tampilkan nama, category tampilkan nama category, lakukan join
// semua controller di folder control, dan semua
router.get("/", (req, res) => {
  getNews(req,res);
});

router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const query = "select * from news where slug = $1";
    const values = [slug];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      res.status(404).json({
        error: "The news doesn't exist",
      });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, body, imageUrl, userId, categoryId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({
        error: "The title and userId fields cannot be empty",
      });
    }

    const slug = title.split(" ").join("-").toLowerCase();

    const query = "insert into news(title, body, imageUrl, userId, categoryId, slug) values($1, $2, $3, $4, $5, $6)";
    const values = [title, body, imageUrl, userId, categoryId, slug];
    const result = await pool.query(query, values);

    res.status(201).json({
      message: "News has been succesfully posted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
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
