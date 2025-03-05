const { User } = require("../models");

async function authorization(req, res, next) {
  const user = req.user;
  const checkUser = await User.findOne({ where: { username: user.username } });
  if (checkUser) {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: "",
      data: {},
    });
  }
}

module.exports = authorization;
