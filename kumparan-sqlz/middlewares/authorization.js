const { News } = require("../models");

const checkRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access Denied! Only ${roles.join(" or ")} allowed`,
        data: {},
      });
    }
    next();
  };
};

const chechNewsOwner = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const checkUserRole = req.user.role;
    const { slug } = req.params;

    const news = await News.findOne({ where: { slug } });

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "Data Not Found",
        data: {},
      });
    }

    if (checkUserRole === "admin") {
      return next();
    }

    if (userId !== news.UserId) {
      return res.status(403).json({
        success: false,
        message: "Access Denied! You cannot change the news",
        data: {},
      });
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
      data: {},
    });
  }
};

module.exports = { checkRole, chechNewsOwner };
