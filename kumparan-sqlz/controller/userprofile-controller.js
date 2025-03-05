const getProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
        data: {},
      });
    }

    const userData = user.toJSON();
    delete userData.password;

    res.status(200).json({
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

module.exports = { getProfile };
