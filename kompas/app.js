require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.static("public"));
app.use(cors());

// Import Routes
const newsRoutes = require("./routes/news");

app.use("/news", newsRoutes);

app.listen(PORT, () => console.log("app running on port,", PORT));
