const express = require("express");
const app = express();
const PORT = 3000;
const homePage = require("./routes/homepage");

// MIDDLEWARE

app.use(express.json());


// pake middleware authentication yang tugasnya adalah return jsonwebtoken
// authorization middleware untuk cek apakah role user itu bisa melakukan hal ini dan itu, contoh 

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
