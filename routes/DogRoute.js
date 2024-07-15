import { Router } from "express";

const router = Router();

import {
  getAllDogs,
  getDog,
  updateDog,
  createDog,
  deleteDog,
} from "../controllers/DogController.js";
import { authorizePermission } from "../middlewares/authMiddleware.js";
import {
  validateDogInput,
  validateIdParam,
} from "../middlewares/validationMiddleware.js";

router.route("/").get(getAllDogs).post(validateDogInput, createDog);
router
  .route("/:id")
  .get(validateIdParam, getDog)
  .patch(validateIdParam, updateDog)
  .delete(authorizePermission("admin"), deleteDog);

export default router;
