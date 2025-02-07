require('dotenv').config()

const pg = require("pg")
const { Client } = pg;
const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST | "localhost",
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  });

client.connect().then(()=> console.log("success connected")).catch(err => console.log(err))

module.exports = client;