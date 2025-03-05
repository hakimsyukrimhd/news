"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserProfile.belongsTo(models.User, { foreignKey: "UserId", onDelete: "CASCADE" });
    }
  }
  UserProfile.init(
    {
      UserId: DataTypes.INTEGER,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      birthdate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserProfile",
    }
  );
  return UserProfile;
};
