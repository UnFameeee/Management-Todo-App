const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const { handleValidation } = require("../middleware/validation.middleware");

const {
  register,
  login,
  updateUserInfo,
  updatePassword,
  viewUsersWithTask,
  getAllUser,
  getUserInfo,
} = require("../controller/user.controller");

router.post(
  "/register",
  [
    body("email")
      .isEmail()
      .withMessage("lmao")
      .isLength({ min: 1 })
      .withMessage("Email can't be empty")
      .normalizeEmail(),
    body("password")
      .trim() 
      .isLength({ min: 8 })
      .withMessage("Password's length must be longer than 8"),
    body("username")
      .trim()
      .isLength({ min: 8 })
      .withMessage("Username's length must be longer than 8"),
  ],
  handleValidation,
  register
);
router.route("/login").post(login);
router.route("/update-info/:id").put(updateUserInfo);
router.route("/:id/password/change").put(updatePassword);
router.route("/viewTask").get(viewUsersWithTask);
router.route("").get(getAllUser);
router.route("/:id").get(getUserInfo);

module.exports = router;
