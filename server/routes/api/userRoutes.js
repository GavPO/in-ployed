const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getAllUsers).post(createUser);
router.route("/login").post(loginUser);
// /api/users/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
