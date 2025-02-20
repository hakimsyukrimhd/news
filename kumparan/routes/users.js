const router = require("express").Router();
const pool = require("../database/database");

router.post("/register", async (req, res) => {
  try {
    console.log("Mencoba menghubungka ke database");
    const { username, password } = req.body;
    const newUser = await pool.query("insert into users(username, password) values($1, $2)", [username, password]);
    console.log("Data berhasil ditambahkan ke database");
    res.status(200).json({
      massage: "User Berhasil ditambahkan",
    });
  } catch (err) {
    console.error(err.massage);
  }
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
