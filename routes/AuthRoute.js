import { Router } from "express";
import { register, login, logout } from "../controllers/AuthController.js";
import {
  validateUserRegister,
  validateUserLogin,
} from "../middlewares/validationMiddleware.js";

const router = Router();

router.post("/register", validateUserRegister, register);
router.post("/login", validateUserLogin, login);
router.get("/logout", logout);

export default router;
