const { Category } = require("../models");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    res.status(200).json({
      success: true,
      message: "Data found.",
      data: categories,
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

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(409).json({
        success: false,
        message: "Data Not Found",
        data: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "Data found.",
      data: category,
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

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(409).json({
        success: false,
        message: "Data must be complete",
        data: {},
      });
    }

    const category = await Category.findOne({ where: { name } });

    if (category) {
      return res.status(409).json({
        success: false,
        message: "Category has already in use",
        data: {},
      });
    }

    const addCategory = await Category.create({ name });

    res.status(201).json({
      success: true,
      message: "Category has been added",
      data: addCategory,
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

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(409).json({
        success: false,
        message: "Category Not Found",
        data: {},
      });
    }

    if (!name) {
      return res.status(409).json({
        success: false,
        message: "Data must input",
        data: {},
      });
    }

    const updateCategory = await Category.update({ name }, { where: { id } });

    const getCategory = await Category.findByPk(id);

    res.status(201).json({
      success: true,
      message: "Updated Succes",
      data: getCategory,
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

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(409).json({
        success: false,
        message: "Category Not Found",
        data: {},
      });
    }

    const deleteCategory = await Category.destroy({ where: { id } });

    res.status(201).json({
      success: true,
      message: "Category deleted",
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

module.exports = { getCategories, getCategory, addCategory, updateCategory, deleteCategory };
