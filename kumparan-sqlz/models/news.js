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
      News.belongsTo(models.User);
      News.belongsToMany(models.Category, { through: "NewsCategories" });
      News.belongsToMany(models.Tag, { through: "NewsTags" });
    }
  }
  News.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
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
