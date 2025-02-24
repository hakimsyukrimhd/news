const { userRegisterModels } = require("../models/users-models");
const { userLoginModels } = require("../models/users-models");
const { userGetByIdModels } = require("../models/users-models");
const { userUpdateByidModels } = require("../models/users-models");
const { userDeleteByIdModels } = require("../models/users-models");

// USER REGISTER CONTROLLER
const userRegister = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        error: "Please enter complete data",
      });
    }

    await userRegisterModels(username, password);

    res.status(201).json({
      message: "User has been successfully registered",
    });
  } catch (err) {
    if (err.message === "Username already exist") {
      return res.status(409).json({
        error: "Username has already in use",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

// USER LOGIN CONTROLLER
const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(404).json({
        error: "Please enter complete data",
      });
    }

    await userLoginModels(username, password);

    res.status(200).json({
      message: "You have successfully logged in",
    });
  } catch (err) {
    if (err.message === "Invalid data input") {
      return res.status(409).json({
        error: "Invalid data input",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

// GET USER BY ID CONTROLLER
const userGetById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await userGetByIdModels(id);

    res.status(200).json(result.rows[0]);
  } catch (err) {
    if (err.message === "User not Found") {
      return res.status(404).json({
        error: "User not found",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

// UPDATE USER BY ID CONTROLLER
const userUpdateByid = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    if (!username && !password) {
      return res.status(400).json({
        error: "Please provide at least one field to update",
      });
    }

    const result = await userUpdateByidModels(id, username, password);

    res.status(200).json({
      message: "User successfully updated",
      user: result.rows[0],
    });
  } catch (err) {
    if (err.message === "User not found") {
      return res.status(404).json({
        error: "User not found",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

// DELETE USER BY ID CONTROLLER
const userDeleteById = async (req, res) => {
  try {
    const { id } = req.params;

    await userDeleteByIdModels(id);

    res.status(200).json({
      massage: "User succesfully deleted",
    });
  } catch (err) {
    if (err.message === "User not found") {
      return res.status(404).json({
        error: "User not found",
      });
    }
    console.error(err);
    res.status(500).json({
      error: "There is an error on the server",
    });
  }
};

module.exports = { userRegister, userLogin, userGetById, userUpdateByid, userDeleteById };
