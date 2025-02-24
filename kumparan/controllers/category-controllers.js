const { getAllCategoriesModels } = require("../models/category-models");
const { getCategorybyIdModels } = require("../models/category-models");
const { addCategoryModels } = require("../models/category-models");
const { updateCategoryByIdModels } = require("../models/category-models");
const { deleteCategoryByIdModels } = require("../models/category-models");

const getAllCategories = async (req, res) => {
  try {
    const result = await getAllCategoriesModels();
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      massage: "There is an error on the server",
    });
  }
};

const getCategorybyId = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await getCategorybyIdModels(id);

    res.status(200).json(result.rows[0]);
  } catch (err) {
    if (err.message === "Not Found") {
      return res.status(404).json({
        error: "The category does not exist",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "Please input the category name",
      });
    }

    const result = await addCategoryModels(name);

    res.status(201).json({
      message: "Category has been succesfully added",
      rows: result.rows,
    });
  } catch (err) {
    if (err.message === "Already in use") {
      return res.status(409).json({
        error: "The category is already on the list ",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  } finally {
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const result = await updateCategoryByIdModels(id, name);

    res.status(200).json({
      message: "The category succesfully updated",
      row: result.rows[0],
    });
  } catch (err) {
    if (err.message === "Not Found") {
      return res.status(404).json({
        error: "The category does not exist",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteCategoryByIdModels(id);

    res.status(200).json({
      message: "Category has been succesfully deleted",
    });
  } catch (err) {
    if (err.message === "Not Found") {
      return res.status(404).json({
        error: "Category does not exist",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

module.exports = { getAllCategories, getCategorybyId, addCategory, updateCategoryById, deleteCategoryById };
