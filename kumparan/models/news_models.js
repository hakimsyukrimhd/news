const pool = require("../database/database");

const getNews = async () => {
  return await pool.query("select * from news");
};

module.exports = {getNews};
