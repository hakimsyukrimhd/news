const router = require("express").Router();
const pool = require("../database/database");

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("select * from categories");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      massage: "There is an error on the server",
    });
  }
});

router.get("/:slug", (req, res) => {
  const newsParams = req.params.slug;
});

router.post("/", async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query("begin");

    const { name } = req.body;

    if (!name) {
      await client.query("rollback");
      return res.status(400).json({
        error: "Please input the category name",
      });
    }

    const checkCategory = "select * from categories where name = $1";
    const checkValue = [name];
    const checkResult = await client.query(checkCategory, checkValue);

    if (checkResult.rows.length > 0) {
      await client.query("rollback");
      return res.status(409).json({
        error: "The category is already on the list ",
      });
    }

    const query = "insert into categories(name) values($1) returning *";
    const values = [name];
    const result = await client.query(query, values);

    await client.query("commit");

    res.status(201).json({
      message: "Category has been succesfully added",
      rows: result.rows,
    });
  } catch (err) {
    await client.query("rollback");
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  } finally {
    client.release();
  }
});

router.patch("/:id", (req, res) => {
  const newsParams = req.params.id;
  const newsBody = req.body;
});

router.delete("/:id", (req, res) => {
  const newsParams = req.params.id;
});

module.exports = router;
