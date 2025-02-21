const router = require("express").Router();
const categories = require("./category");
const pool = require("../database/database");

router.use("/category", categories);

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("select * from news");

    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
});

router.get("/:slug", (req, res) => {
  const newsParams = req.params.slug;
});

// baru sampai get pertama
router.post("/", async (req, res) => {
  try {
    const { title, body, imageUrl, date, userId, categoryId } = req.body;

    if (!title && !body && !imageUrl && date && !userId && !categoryId) {
      return res.status(404).json({
        error: "Please provide at least one field to input",
      });
    }

    const checkCategory = await pool.query("select * from categories where id = $1", [categoryId]);
    if (checkCategory.rows.length === 0) {
      const addCategory = await pool.query("insert into categories(name) values($1)", [categoryId]);
    }
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
