// File ini akan otomatis dieksekusi saat pertama kali di-require di mana saja dalam aplikasi
// karena ada kode IIFE (Immediately Invoked Function Expression) yang langsung dijalankan.
//
// Jadi, meskipun kita hanya menjalankan `app.js`, koneksi ke database akan langsung dicek
// karena file ini direquire di model/controller yang terhubung ke `app.js`.

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("news", "hackim", "1234", {
  host: "localhost",
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
