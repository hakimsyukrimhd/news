const router = require("express").Router();
const pool = require("../database/database");

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await pool.query("insert into users(username, password) values($1, $2)", [username, password]);
    res.status(200).json({
      massage: "User berhasil didaftarkan",
    });
  } catch (err) {
    if (err.code === "23502") {
      return res.status(404).json({
        error: "Masukkan data yang lengkap",
      });
    }
    if (err.code === "23505") {
      return res.status(404).json({
        error: "Username sudah digunakan",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "Ada kesalahan pada server",
    });
  }
});

router.post("/login", (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await pool.query("select * from users where id = $1", [id]);
    if (getUser.rows.length === 0) {
      return res.status(404).json({
        error: "Username tersebut tidak ada",
      });
    }
    res.status(200).json(getUser.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Ada kesalahan pada server",
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;
    if (username === undefined) {
      const getUser = await pool.query("update users set password = $1 where id = $2", [password, id]);
      return res.status(200).json({
        massage: "Password user telah berhasil di update",
      });
    } else if (password === undefined) {
      const getUser = await pool.query("update users set username = $1 where id = $2", [username, id]);
      return res.status(200).json({
        massage: "Username user telah berhasil di update",
      });
    }
    const getUser = await pool.query("update users set username = $1, password = $2 where id = $3", [username, password, id]);
    res.status(200).json({
      massage: "Username dan Password user telah berhasil di update",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Ada kesalahan pada server",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await pool.query("delete from users where id = $1", [id]);
    if (getUser.rows.length === 0) {
      return res.status(404).json({
        error: "User tidak ditemukan",
      });
    }
    res.status(200).json({
      massage: "User berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Ada kesalahan pada server",
    });
  }
});

module.exports = router;
