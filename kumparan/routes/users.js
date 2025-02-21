const router = require("express").Router();
const pool = require("../database/database");

router.post("/register", async (req, res) => {
  const client = await pool.connect();
  try {
    const { username, password } = req.body;

    // make sure the data must complete
    if (!username || !password) {
      return res.status(400).json({
        error: "Please enter complete data",
      });
    }

    const checkUser = "select * from users where username = $1";
    const checkValue = [username];
    const checkResult = await client.query(checkUser, checkValue);

    if (checkResult.rows.length > 0) {
      return res.status(409).json({
        error: "Username is already in use",
      });
    }

    await client.query("begin");

    const query = "insert into users(username, password) values($1, $2) returning id, username";
    const values = [username, password];

    const result = await client.query(query, values);

    await client.query("commit");

    res.status(201).json({
      message: "User has been successfully registered",
      id: result.rows[0].id,
      username: result.rows[0].username,
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

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(404).json({
        error: "Please enter complete data",
      });
    }

    let query = "select * from users where username = $1 and password = $2";
    let values = [username, password];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Please log in with the correct account",
      });
    }

    res.status(200).json({
      message: "You have successfully logged in",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let query = "select id, username from users where id = $1";
    let values = [id];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "User not found",
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

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    if (!username && !password) {
      return res.status(400).json({
        error: "Please provide at least one field to update",
      });
    }

    let query, values;

    if (username === undefined) {
      query = "UPDATE users SET password = $1 WHERE id = $2 RETURNING id, username";
      values = [password, id];
    } else if (password === undefined) {
      query = "UPDATE users SET username = $1 WHERE id = $2 RETURNING id, username";
      values = [username, id];
    } else {
      query = "UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING id, username";
      values = [username, password, id];
    }

    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.status(200).json({
      message: "User successfully updated",
      user: result.rows[0],
    });
  } catch (err) {
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let query = "delete from users where id = $1";
    let values = [id];

    let result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.status(200).json({
      massage: "User succesfully deleted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
});

module.exports = router;
