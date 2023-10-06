const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 5001;
app.use(cors());
const url = process.env.url;
async function connect() {
  try {
    await mongoose.connect(url);
    console.log("connected");
  } catch (e) {
    console.log(e);
  }
}
connect();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


routes(app);
app.listen(PORT, () => {
    console.log("server started");
  });