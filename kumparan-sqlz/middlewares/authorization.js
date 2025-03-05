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

module.exports = { checkRole };
