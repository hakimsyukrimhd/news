const pool = require("../database/database");

const getAllCategoriesModels = async () => {
  return await pool.query("select * from categories");
};

const getCategorybyIdModels = async (id) => {
  const query = "select * from categories where id = $1";
  const values = [id];
  const result = await pool.query(query, values);

  if (result.rows.length === 0) {
    throw new Error("Not Found");
  }
  return result;
};

const addCategoryModels = async (name) => {
  const client = await pool.connect();

  const checkCategory = "select * from categories where name = $1";
  const checkValue = [name];
  const checkResult = await client.query(checkCategory, checkValue);

  if (checkResult.rows.length > 0) {
    throw new Error("Already in use");
  }

  await client.query("begin");

  const query = "insert into categories(name) values($1) returning *";
  const values = [name];
  const result = await client.query(query, values);

  await client.query("commit");

  client.release();

  return result;
};

const updateCategoryByIdModels = async (id, name) => {
  const query = "update categories set name = $1 where id = $2 returning *";
  const values = [name, id];
  const result = await pool.query(query, values);

  if (result.rowCount === 0) {
    throw new Error("Not Found");
  }

  return result;
};

const deleteCategoryByIdModels = async (id) => {
  const query = "delete from categories where id = $1";
  const values = [id];
  const result = await pool.query(query, values);

  if (result.rowCount === 0) {
    throw new Error("Not Found");
  }
};

module.exports = { getAllCategoriesModels, getCategorybyIdModels, addCategoryModels, updateCategoryByIdModels, deleteCategoryByIdModels };
