const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
// const cors = require("cors");

const app = express();
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.set("view engine", "ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"))
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

dotenv.config({ path: "config.env" });

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
