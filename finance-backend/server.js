require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

// Connect Database
connectDB();

// Define PORT properly
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});