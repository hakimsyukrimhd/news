const { Category } = require("../models");

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();

    if (categories.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No data available yet, please insert data first",
        data: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "Data Found",
      data: categories,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Not Found",
        data: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "Data Found",
      data: category,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(409).json({
        success: false,
        message: "Data cannot empty",
        data: {},
      });
    }

    const checkCategory = await Category.findOne({ where: { name } });

    if (checkCategory) {
      return res.status(409).json({
        success: false,
        message: "Duplicate Data",
        data: {},
      });
    }

    const addCategory = await Category.create({ name: name });

    res.status(201).json({
      success: true,
      message: "Data Saved",
      data: addCategory,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(409).json({
        success: false,
        message: "Data cannot empty",
        data: {},
      });
    }

    const getCategory = await Category.findByPk(id);

    if (!getCategory) {
      return res.status(404).json({
        success: false,
        message: "Not Found",
        data: {},
      });
    }

    const checkCategory = await Category.findOne({ where: { name } });

    if (checkCategory) {
      return res.status(409).json({
        success: false,
        message: "Duplicate Data",
        data: {},
      });
    }

    const updateCategory = await Category.update({ name }, { where: { id } });

    res.status(200).json({
      success: true,
      message: "Data Saved",
      data: getCategory,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const getCategory = await Category.findByPk(id);

    if (!getCategory) {
      return res.status(404).json({
        success: false,
        message: "Not Found",
        data: {},
      });
    }

    const deleteCategory = await Category.destroy({ where: { id } });

    res.status(200).json({
      message: "Category has been succesfully deleted",
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getAllCategory, getCategoryById, addCategory, updateCategoryById, deleteCategoryById };
