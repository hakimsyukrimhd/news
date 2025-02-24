const pool = require("../database/database");

// USER REGISTER MODELS
const userRegisterModels = async (username, password) => {
  const client = await pool.connect();

  const checkUser = "select * from users where username = $1";
  const checkValue = [username];
  const checkResult = await client.query(checkUser, checkValue);

  if (checkResult.rows.length > 0) {
    throw new Error("Username already exist");
  }

  await client.query("begin");

  const query = "insert into users(username, password) values($1, $2)";
  const values = [username, password];
  await client.query(query, values);

  await client.query("commit");

  client.release();
};

// USER LOGIN MODELS
const userLoginModels = async (username, password) => {
  let query = "select * from users where username = $1 and password = $2";
  let values = [username, password];
  const result = await pool.query(query, values);

  if (result.rows.length === 0) {
    throw new Error("Invalid data input");
  }
};

// GET USER BY ID MODELS
const userGetByIdModels = async (id) => {
  const query = "select id, username from users where id = $1";
  const values = [id];
  const result = await pool.query(query, values);

  if (result.rows.length === 0) {
    throw new Error("User not Found");
  }
  return result;
};

// UPDATE USER BY ID MODELS
const userUpdateByidModels = async (id, username, password) => {
  let query, values;

  if (username === undefined) {
    query = "UPDATE users SET password = $1 WHERE id = $2 RETURNING id, username";
    values = [password, id];
  } else if (password === undefined) {
    query = "UPDATE users SET username = $1 WHERE id = $2 RETURNING id, username";
    values = [username, id];
  } else {
    query = "UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING id, username";
    values = [username, password, id];
  }

  const result = await pool.query(query, values);

  if (result.rowCount === 0) {
    throw new Error("User not found");
  }

  return result;
};

// DELETE USER BY ID MODELS
const userDeleteByIdModels = async (id) => {
  const query = "delete from users where id = $1";
  const values = [id];
  const result = await pool.query(query, values);

  if (result.rowCount === 0) {
    throw new Error("User not found");
  }
};

module.exports = { userRegisterModels, userLoginModels, userGetByIdModels, userUpdateByidModels, userDeleteByIdModels };
