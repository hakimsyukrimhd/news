"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NewsCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NewsCategory.belongsTo(models.News);
      NewsCategory.belongsTo(models.Category);
    }
  }
  NewsCategory.init(
    {
      newsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "News",
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "NewsCategory",
    }
  );
  return NewsCategory;
};
