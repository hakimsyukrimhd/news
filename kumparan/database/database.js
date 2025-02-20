const { Pool } = require("pg");

const pool = new Pool({
  user: 'hackim', // Ganti dengan user PostgreSQL kamu
  host: 'localhost',
  database: 'news', // Ganti dengan database yang mau dihubungkan
  password: '1234', // Ganti dengan password PostgreSQL kamu
  port: 5432, // Port default PostgreSQL
});

module.exports = pool;

