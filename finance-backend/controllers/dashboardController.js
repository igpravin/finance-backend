const Record = require("../models/Record");

exports.getDashboard = async (req, res) => {
  try {
    const records = await Record.find({ createdBy: req.user.id });

    let income = 0;
    let expense = 0;

    records.forEach((r) => {
      if (r.type === "income") income += r.amount;
      else expense += r.amount;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      balance: income - expense,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};