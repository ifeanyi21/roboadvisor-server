const mongoose = require("mongoose");

const riskSchema = new mongoose.Schema(
  {
    score: Number,
    nigerianStocks: Number,
    foriegnStocks: Number,
    techStocks: Number,
    emergingStocks: Number,
    nigerianBonds: Number,
    foriegnBonds: Number,
    commodities: Number,
    realEstate: Number,
    tBills: Number,
    alternative: Number,
  },
  { timestamps: true }
);

module.exports = new mongoose.model("risk", riskSchema);
