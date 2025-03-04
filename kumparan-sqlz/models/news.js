"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      News.belongsTo(models.User, { foreignKey: "UserId" });
      News.belongsTo(models.Category, { foreignKey: "CategoryId" });
    }
  }
  News.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      UserId: {
        type: DataTypes.INTEGER,
        field: "UserId",
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        field: "CategoryId",
      },
      slug: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "News",
      tableName: "News",
    }
  );
  return News;
};
