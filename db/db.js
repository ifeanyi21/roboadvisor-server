const mongoose = require("mongoose");

const url =
  "mongodb+srv://coinsv2:dErvAQWkjUf0ZDAL@cluster0.tujrc.mongodb.net/risk-tolerance?retryWrites=true&w=majority";

const db = mongoose
  .connect(url, { autoIndex: false })
  .then(() => console.log("Database connected!"));

module.exports = db;
