const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordController");

// ================== RECORD ROUTES ==================

// CREATE (Admin only)
router.post("/", auth, authorize("admin"), createRecord);

// GET (All logged-in users)
router.get("/", auth, getRecords);

// UPDATE (Admin only)
router.patch("/:id", auth, authorize("admin"), updateRecord);

// DELETE (Admin only)
router.delete("/:id", auth, authorize("admin"), deleteRecord);

module.exports = router;