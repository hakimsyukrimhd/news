const pool = require("../database/database");
const slugify = require("slugify");
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../database/sequelize");

class News extends Model {}

News.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageurl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    categoryid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: "categories",
        key: "id",
      },
      onDelete: "SET DEFAULT"
    },
    slug: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "News",
    tableName: "news",
    timestamps: false,
  }
);

// folder baru

// GET ALL NEWS MODELS
const getAllNewsModels = async () => {
  return await pool.query("select news.*, users.username as user_name, categories.name as category_name from news join users on users.id = news.userId join categories on categories.id = news.categoryId");
};

// GET NEWS BY SLUG MODELS
const getNewsBySlugModels = async (slug) => {
  const query = "select news.*, users.username as user_name, categories.name as category_name from news join users on users.id = news.userId join categories on categories.id = news.categoryId where slug = $1";
  const values = [slug];
  const result = await pool.query(query, values);

  if (result.rows.length === 0) {
    throw new Error("Not Found");
  }

  return result;
};

// ADD NEWS MODELS
const addNewsModels = async (title, body, imageUrl, userId, categoryId) => {
  const client = await pool.connect();

  const slug = slugify(title, { lower: true, strict: true });

  const queryCheckSlug = "select * from news where slug = $1";
  const valueCheckSlug = [slug];
  const resultCheckSlug = await client.query(queryCheckSlug, valueCheckSlug);

  if (resultCheckSlug.rows.length > 0) {
    throw new Error("Duplikat Slug");
  }

  await client.query("begin");

  const query = "insert into news(title, body, imageUrl, userId, categoryId, slug) values($1, $2, $3, $4, $5, $6)";
  const values = [title, body, imageUrl, userId, categoryId, slug];
  const result = await pool.query(query, values);

  await client.query("commit");

  client.release();
};

// UPDATE NEWS BY SLUG MODELS
const updateNewsBySlugModels = async (slug, title, body, imageUrl, userId, categoryId) => {
  const queryGetNewsBySlug = "select * from news where slug = $1";
  const valueGetNewsBySlug = [slug];
  const resultGetNewsBySlug = await pool.query(queryGetNewsBySlug, valueGetNewsBySlug);

  if (resultGetNewsBySlug.rows.length === 0) {
    throw new Error("Not Found");
  }

  if (!title && !body && !imageUrl && !userId && !categoryId) {
    return res.status(400).json({
      error: "Please Provide at least one data to updated",
    });
  }

  const newSlug = slugify(title, { lower: true, strict: true });

  const queryCheckSlug = "select * from news where slug = $1";
  const valueCheckSlug = [newSlug];
  const resultCheckSlug = await pool.query(queryCheckSlug, valueCheckSlug);

  if (resultCheckSlug.rows.length > 0) {
    throw new Error("Duplikat Slug");
  }

  const query = "insert into news(title, body, imageUrl, userId, categoryId, slug) values($1, $2, $3, $4, $5, $6) returning *";
  const values = [title, body, imageUrl, userId, categoryId, newSlug];
  const result = await pool.query(query, values);

  return result;
};

// DELETE NEWS BY SLUG MODELS
const deleteNewsBySlugModels = async (slug) => {
  const query = "delete from news where slug = $1";
  const values = [slug];
  const result = await pool.query(query, values);

  if (result.rowCount === 0) {
    throw new Error("Not Found");
  }
};

module.exports = { getAllNewsModels, getNewsBySlugModels, addNewsModels, updateNewsBySlugModels, deleteNewsBySlugModels };
