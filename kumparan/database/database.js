// File ini akan otomatis dieksekusi saat pertama kali di-require di mana saja dalam aplikasi
// karena ada kode IIFE (Immediately Invoked Function Expression) yang langsung dijalankan.
//
// Jadi, meskipun kita hanya menjalankan `app.js`, koneksi ke database akan langsung dicek
// karena file ini direquire di model/controller yang terhubung ke `app.js`.

const { Pool } = require("pg");

const pool = new Pool({
  user: "hackim", // Ganti dengan user PostgreSQL kamu
  host: "localhost",
  database: "news", // Ganti dengan database yang mau dihubungkan
  password: "1234", // Ganti dengan password PostgreSQL kamu
  port: 5432, // Port default PostgreSQL
});

(async () => {
  try {
    await pool.query("SELECT 1"); // Query sederhana untuk cek koneksi
    console.log("✅ Database berhasil terhubung!");
  } catch (err) {
    console.error("❌ Gagal menghubungkan database:", err.message);
    process.exit(1); // Keluar dari proses jika gagal
  }
})();

module.exports = pool;
