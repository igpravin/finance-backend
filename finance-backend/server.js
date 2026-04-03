require("dotenv").config();   // ✅ ADD THIS

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port " + process.env.PORT);
});