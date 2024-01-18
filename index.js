const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/db");
const riskTolerance = require("./models/risks");

const app = express();

app.use(cors());
const PORT = 3100;

app.use(bodyParser.json());

app.post("/risk/set", async (req, res) => {
  const { risk } = req.body;
  const foundRisk = await riskTolerance.findOne({ score: risk });
  return res.json(foundRisk);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  db;
});
