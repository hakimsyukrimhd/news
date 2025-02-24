const { getAllNewsModels } = require("../models/news-models");
const { getNewsBySlugModels } = require("../models/news-models");
const { addNewsModels } = require("../models/news-models");
const { updateNewsBySlugModels } = require("../models/news-models");
const { deleteNewsBySlugModels } = require("../models/news-models");

// GET ALL NEWS CONTROLLER
const getAllNews = async (req, res) => {
  try {
    const result = await getAllNewsModels();
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

// GET NEWS BY SLUG CONTROLLER
const getNewsBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const result = await getNewsBySlugModels(slug);

    res.status(200).json(result.rows);
  } catch (err) {
    if (err.message === "Not Found") {
      return res.status(404).json({
        error: "The news doesn't exist",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

// ADD NEWS CONTROLLER
const addNews = async (req, res) => {
  try {
    const { title, body, imageUrl, userId, categoryId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({
        error: "The title and userId fields cannot be empty",
      });
    }

    await addNewsModels(title, body, imageUrl, userId, categoryId);

    res.status(201).json({
      message: "News has been succesfully posted",
    });
  } catch (err) {
    if (err.message === "Duplikat Slug") {
      return res.status(409).json({
        error: "News Title already in use",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

// UPDATE NEWS BY SLUG CONTROLLER
const updateNewsBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, body, imageUrl, userId, categoryId } = req.body;

    const result = await updateNewsBySlugModels(slug, title, body, imageUrl, userId, categoryId);

    res.status(200).json({
      message: "News has been succesfully updated",
      rows: result.rows[0],
    });
  } catch (err) {
    if (err.message === "Not Found") {
      return res.status(409).json({
        error: "News not Found",
      });
    }
    if (err.message === "Duplikat Slug") {
      return res.status(409).json({
        error: "News title already in use",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

// DELETE NEWS BY SLUG CONTROLLER
const deleteNewsBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    await deleteNewsBySlugModels(slug);

    res.status(200).json({
      message: "News has succesfully deleted",
    });
  } catch (err) {
    if (err.message === "Not Found") {
      return res.status(404).json({
        error: "The News doesn't exist",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};
module.exports = { getAllNews, getNewsBySlug, addNews, updateNewsBySlug, deleteNewsBySlug };
