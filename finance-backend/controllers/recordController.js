const Record = require("../models/Record");

// CREATE RECORD (ADMIN)
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category } = req.body;

    if (!amount || !type || !category) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const record = await Record.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET RECORDS (ALL LOGGED USERS)
exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE RECORD (ADMIN)
exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE RECORD (ADMIN)
exports.deleteRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json({ message: "Record deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};