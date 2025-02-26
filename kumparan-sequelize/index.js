const express = require("express");
const app = express();
const { User, Category } = require("./models");
const PORT = 3000;

app.get("/", async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users)
//   console.log(users);
});

app.listen(PORT, () => {
  console.log("This app runngin on the server", PORT);
});

