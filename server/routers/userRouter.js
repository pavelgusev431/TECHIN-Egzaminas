// @ts-check
import {
  createUser,
  login,
  logout,
  me,
} from "../controllers/userController.js";

import express from "express";
import protect from "../validators/validateJWT.js";
import validateCreateUser from "../validators/validateCreateUser.js";
import validateLogin from "../validators/validateLogin.js";
import validate from "../middlewares/validate.js";

/**@type {express.Router}*/
const userRouter = express.Router();

userRouter.route("/").post(validateCreateUser, validate, createUser);
userRouter.route('/login').post(validateLogin, validate, login);
userRouter.route('/logout').post(logout);
userRouter.use(protect);
userRouter.route('/u/me').get(me);

export default userRouter;