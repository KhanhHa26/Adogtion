import { Router } from "express";

const router = Router();

import {
  getCurrentUser,
  getDogStats,
  updateUser,
} from "../controllers/UserController.js";
import { validateUpdateUserInput } from "../middlewares/validationMiddleware.js";
import { authorizePermission } from "../middlewares/authMiddleware.js";

router.get("/current-user", getCurrentUser);
router.get("/admin/dog-stats", authorizePermission("admin"), getDogStats);
router.patch("/update-user", validateUpdateUserInput, updateUser);

export default router;
