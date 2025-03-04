const { News } = require("../models");
const slugify = require("slugify");

const getAllNews = async (req, res) => {
  try {
    const news = await News.findAll();

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

    const news = await News.findOne({ where: { slug } });

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
    const { title, body, imageUrl, UserId, CategoryId } = req.body;

    if (!title || !body || !imageUrl || !UserId || !CategoryId) {
      return res.status(400).json({
        success: false,
        message: "Data must be complete",
        data: {},
      });
    }

    const slugTitle = slugify(title, { lower: true });

    const checkNews = await News.findOne({ where: { slug: slugTitle } });

    if (checkNews) {
      return res.status(409).json({
        success: false,
        message: "Title has already in use",
        data: {},
      });
    }

    const newNews = await News.create({ title, body, imageUrl, UserId, CategoryId, slug: slugTitle });

    res.status(201).json({
      success: true,
      message: "News has been added",
      data: newNews,
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

const updateNews = async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, body, imageUrl, UserId, CategoryId } = req.body;

    const news = await News.findOne({ where: { slug } });

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News Not Found",
        data: {},
      });
    }

    if (!title && !body && !imageUrl && !CategoryId) {
      return res.status(400).json({
        success: false,
        message: "Input atleast one field",
        data: {},
      });
    }

    let newSlug = news.slug;
    if (title) {
      newSlug = slugify(title, { lower: true });
    }

    const updateRowCount = await News.update({ title, body, imageUrl, UserId, CategoryId, slug: newSlug }, { where: { slug } });

    const updateNews = await News.findOne({ where: { slug: newSlug } });

    res.status(201).json({
      success: true,
      message: "Updated Succes",
      data: updateNews,
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

const deleteNews = async (req, res) => {
  try {
    const { slug } = req.params;

    const news = await News.findOne({ where: { slug } });

    if (!news) {
      return res.status(409).json({
        success: false,
        message: "News Not Found",
        data: {},
      });
    }

    const deleteNews = await News.destroy({ where: { slug } });

    res.status(201).json({
      success: true,
      message: "News deleted",
      data: {},
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
module.exports = { getAllNews, getNewsBySlug, addNews, updateNews, deleteNews };
