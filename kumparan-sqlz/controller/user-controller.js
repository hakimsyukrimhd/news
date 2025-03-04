require("dotenv").config(); // ini untuk mengaktifkan env
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      return res.status(409).json({
        success: false,
        message: "Data must be complete",
        data: {},
      });
    }

    const user = await User.findOne({ where: { username } });

    if (user) {
      return res.status(409).json({
        success: false,
        message: "Username has already in use",
        data: {},
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const userRegister = await User.create({ name, username, password: hash });

    const userData = userRegister.toJSON();
    delete userData.password;

    res.status(201).json({
      success: true,
      message: "User has been registered",
      data: userData,
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

const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(409).json({
        success: false,
        message: "Data must be complete",
        data: {},
      });
    }

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(409).json({
        success: false,
        message: "Cannot find your account",
        data: {},
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password",
        data: {},
      });
    }

    const userData = {
      name: user.name,
      username: user.username,
    };

    const accesToken = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET);

    res.status(200).json({
      success: true,
      message: "Login Succes",
      accesToken: accesToken,
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

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(409).json({
        success: false,
        message: "User Not Found",
        data: {},
      });
    }

    const userData = user.toJSON();
    delete userData.password;

    res.status(201).json({
      success: true,
      message: "User Found",
      data: userData,
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

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, password } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
        data: {},
      });
    }

    if (!name && !username && !password) {
      return res.status(400).json({
        success: false,
        message: "Input atleast one field",
        data: {},
      });
    }

    let newPassword = user.password;
    if (password) {
      newPassword = await bcrypt.hash(password, 10);
    }

    const updateUser = await User.update({ name, username, password: newPassword }, { where: { id } });

    const getUser = await User.findByPk(id);

    const userData = getUser.toJSON();
    delete userData.password;

    res.status(201).json({
      success: true,
      message: "Updated Succes",
      data: userData,
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

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(409).json({
        success: false,
        message: "User Not Found",
        data: {},
      });
    }

    const deleteUser = await User.destroy({ where: { id } });

    res.status(201).json({
      success: true,
      message: "User deleted",
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
module.exports = { userRegister, userLogin, getUser, updateUser, deleteUser };
