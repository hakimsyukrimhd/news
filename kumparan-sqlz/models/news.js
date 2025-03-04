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
      News.belongsTo(models.User, { foreignKey: "userId" });
      News.belongsTo(models.Category, { foreignKey: "categoryId" });
    }
  }
  News.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      imageurl: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        field: "userid",
      },
      categoryId: {
        type: DataTypes.INTEGER,
        field: "categoryid",
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
