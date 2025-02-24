const express = require("express");
const app = express();
const PORT = 3000;
const homePage = require("./routes/homepage");
const pool = require("./database/database");

// MIDDLEWARE

app.use(express.json());

const checkDatabase = async () => {
  try {
    await pool.query("SELECT 1"); // Query sederhana untuk cek koneksi
    console.log("✅ Database berhasil terhubung!");
  } catch (err) {
    console.error("❌ Gagal menghubungkan database:", err.message);
    process.exit(1); // Keluar dari proses jika gagal
  }
};
checkDatabase();

app.use((req, res, next) => {
  const date = new Date();
  console.log("LOGGED");
  console.log("Time:", date);
  next();
});

// MAIN ROUTE

app.use("/", homePage);

app.listen(PORT, () => {
  console.log("This app running on PORT", PORT);
});
