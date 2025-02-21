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

router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const query = "select * from categories where lower(name) = $1";
    const values = [slug];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "The category does not exist",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
});

router.post("/", async (req, res) => {
  const client = await pool.connect();
  try {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({
        error: "Please input the category name",
      });
    }
    
    const checkCategory = "select * from categories where name = $1";
    const checkValue = [name];
    const checkResult = await client.query(checkCategory, checkValue);

    if (checkResult.rows.length > 0) {
      return res.status(409).json({
        error: "The category is already on the list ",
      });
    }
    
    await client.query("begin");
    
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

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const query = "update categories set name = $1 where id = $2 returning *";
    const values = [name, id];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({
        error: "The category does not exist",
      });
    }

    res.status(200).json({
      message: "The category succesfully updated",
      row: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const query = "delete from categories where id = $1";
    const values = [id];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({
        error: "Category does not exist",
      });
    }

    res.status(200).json({
      message: "Category has been succesfully deleted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
});

module.exports = router;
