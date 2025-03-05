// function authentication ,
const jwt = require("jsonwebtoken");

function authentication(req, res, next) {
  const token = req.headers.token;
  var decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  console.log(decoded);
  if (!decoded) {
    res.status(400).json({
      success: false,
      message: "Invalid Token",
      data: {},
    });
  } else {
    // cari user dulu di database
    req.user = decoded;
    next();
  }
}

module.exports = authentication;
