const router = require("express").Router();
const { getUsers, updateUser } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.get("/", auth, authorize("admin"), getUsers);
router.patch("/:id", auth, authorize("admin"), updateUser);

module.exports = router;