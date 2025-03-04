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
      News.belongsToMany(models.Category, { foreignKey: "CategoryId" });
      News.belongsToMany(models.Tag, { foreignKey: "TagId" });
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
      TagId: {
        type: DataTypes.INTEGER,
        field: "TagId",
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
