const { News } = require("../models");
const slugify = require("slugify");

const getAllNews = async (req, res) => {
  try {
    const news = await News.findAll({
      attributes: { exclude: ["CategoryId", "UserId"] },
    });

    res.status(200).json({
      success: true,
      message: "Data found.",
      data: news,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
      data: {},
    });
  }
};

const getNewsBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const news = await News.findOne({ where: { slug }, attributes: { exclude: ["CategoryId", "UserId"] } });

    if (!news) {
      return res.status(409).json({
        success: false,
        message: "Data Not Found",
        data: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "Data found.",
      data: news,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
      data: {},
    });
  }
};

const addNews = async (req, res) => {
  try {
    const { title, body, imageurl, userId, categoryId } = req.body;

    if (!title || !body || !imageurl || !userId || !categoryId) {
      return res.status(400).json({
        success: false,
        message: "Data must be complete",
        data: {},
      });
    }

    const slugTitle = slugify(title, { lower: true });

    const checkNews = await News.findOne({ where: { slug: slugTitle }, attributes: { exclude: ["CategoryId", "UserId"] } });

    if (checkNews) {
      return res.status(409).json({
        success: false,
        message: "Title has already in use",
        data: {},
      });
    }

    const newNews = await News.create({ title, body, imageurl, userId, categoryId, slug: slugTitle });

    const news = await News.findOne({ where: { slug: slugTitle }, attributes: { exclude: ["CategoryId", "UserId"] } });

    res.status(201).json({
      success: true,
      message: "Category has been added",
      data: news,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
      data: {},
    });
  }
};

module.exports = { getAllNews, getNewsBySlug, addNews };
