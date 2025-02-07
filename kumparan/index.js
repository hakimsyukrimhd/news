const express = require("express");
const app = express();
const PORT = 3000;
const homePage = require("./routes/homepage");

// MIDDLEWARE

app.use((req, res, next) => {
  const date = new Date();
  console.log("LOGGED");
  console.log("Time:", date);
  next();
});

app.use("/", homePage);

app.listen(PORT, () => {
  console.log("This app running on PORT", PORT);
});
