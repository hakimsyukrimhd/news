const pool = require("../database/database");
const getNewsModels = require("../models/news_models");

const getNews = async (req, res) => {
  try {
    const result = await getNewsModels.getNews();
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

module.exports = { getNews };
