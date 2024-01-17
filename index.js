const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/db");

const app = express();

app.use(cors());
const PORT = 3100;

app.use(bodyParser.json());

// Endpoint to set user's risk tolerance
app.post("/risk-tolerance/set", (req, res) => {
  const { user_id, tolerance_level } = req.body;

  if (user_id && tolerance_level !== undefined) {
    userRiskTolerance[user_id] = tolerance_level;
    res.status(200).json({ message: "Risk tolerance set successfully" });
  } else {
    res.status(400).json({ error: "Invalid data" });
  }
});

// Endpoint to get user's risk tolerance
app.get("/risk-tolerance/get", (req, res) => {
  const { user_id } = req.query;

  if (userRiskTolerance[user_id] !== undefined) {
    res
      .status(200)
      .json({ user_id, risk_tolerance: userRiskTolerance[user_id] });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// Endpoint to assess risk based on user's risk tolerance
app.post("/risk-assessment", (req, res) => {
  const { user_id, investment_amount } = req.body;

  if (userRiskTolerance[user_id] !== undefined) {
    // Perform risk assessment logic based on user's tolerance and investment_amount
    // (This is a placeholder, replace with your actual risk assessment logic)
    const riskAssessmentResult = "Low";

    res.status(200).json({ user_id, risk_assessment: riskAssessmentResult });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  db;
});
