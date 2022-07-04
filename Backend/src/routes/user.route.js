const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const { handleValidation } = require("../middleware/validation.middleware");
const {
  isAuthenticatedUser,
  authorizeUserRole,
} = require("../middleware/authenticate.middleware");

const {
  register,
  login,
  updateUserInfo,
  updatePassword,
  viewUsersWithTask,
  getAllUser,
  getUserInfo,
  refreshTheToken,
} = require("../controller/user.controller");

// router.post("/register", register);
// router.route("/login").post(login);
// router.route("/update-info/:id").put(updateUserInfo);
// router.route("/:id/password/change").put(updatePassword);
// router.route("/viewTask").get(viewUsersWithTask);
// router.route("").get(getAllUser);
// router.route("/:id").get(getUserInfo);

router.route("/register").post([
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
],handleValidation, register);

router.route("/login").post(login);

router.route("/update-info/:id").put([
  param("id")
    .matches(/^[0-9]+$/)
    .withMessage("Id does not exist"),
], handleValidation, isAuthenticatedUser, updateUserInfo);

router.route("/:id/password/change").put([
  param("id")
    .matches(/^[0-9]+$/)
    .withMessage("Id does not exist"),
], handleValidation, isAuthenticatedUser, updatePassword);


router.route("/viewTask").get(isAuthenticatedUser, viewUsersWithTask);

router.route("").get(isAuthenticatedUser, authorizeUserRole("leader"), getAllUser);

router.route("/:id").get([
  param("id")
    .matches(/^[0-9]+$/)
    .withMessage("Id does not exist"),
], handleValidation, isAuthenticatedUser, getUserInfo);

router.route("/refreshToken").post(refreshTheToken);

module.exports = router;
