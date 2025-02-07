const db = require("./connect");

function createTableUsers() {
  return db
    .query(
      `CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR (500) UNIQUE NOT NULL,
        password VARCHAR (500) NOT NULL,
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL
      );`
    )
    .then(() => {
      console.log("success create table users");

      const query =
        "INSERT INTO users(username, password, created_at, updated_at) VALUES($1, $2, $3, $4) RETURNING *";
      const newUser = ["admin", "admin", new Date(), new Date()];

      db.query(query, newUser)
        .then(() => console.log("create new user", newUser))
        .catch((err) => console.log("failed create user", err));
    })
    .catch((err) => {
      console.log("error create users", err);
      db.end()
        .then(() => {
          console.log("success close connection users");
        })
        .catch((err) => {
          console.log("failed close connection users");
        });
    });
}

function createTableCategories() {
  return db
    .query(
      `CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR (500) UNIQUE NOT NULL,
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL
      );`
    )
    .then(() => {
      console.log("success create table categories");
    })
    .catch((err) => {
      console.log("error create categories", err);
      db.end()
        .then(() => {
          console.log("success close connection categories");
        })
        .catch((err) => {
          console.log("failed close connection categories");
        });
    });
}

function createTableNews() {
  return db
    .query(
      `CREATE TABLE IF NOT EXISTS news (
        id UUID PRIMARY KEY,
        title VARCHAR (500) UNIQUE NOT NULL,
        slug VARCHAR (500) UNIQUE NOT NULL,
        body TEXT,
        imageUrl TEXT,
        user_id SERIAL,
        category_id SERIAL,
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL,
        CONSTRAINT fk_user
            FOREIGN KEY(user_id)
            REFERENCES users(id)
            ON DELETE CASCADE,
        CONSTRAINT fk_category
            FOREIGN KEY(category_id)
            REFERENCES categories(id)
      );`
    )
    .then(() => {
      console.log("success create table news");
    })
    .catch((err) => {
      console.log("error create news", err);
    });
}

createTableUsers();
createTableCategories();
createTableNews();

// Promise.all(createTableUsers(), createTableCategories())
//   .then(() => console.log("success"))
//   .catch((err) => console.log("error"));
