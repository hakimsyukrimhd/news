const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const homePage = require("./routes/homepage");

// MIDDLEWARE

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use((req, res, next) => {
  const date = new Date();
  console.log("LOGGED");
  console.log("Time:", date);
  next();
});

// MAIN ROUTE

app.use("/", homePage);

app.listen(PORT, () => {
  console.log("This app running on PORT", PORT);
});
