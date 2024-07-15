import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import Dog from "../models/DogSchema.js";
import User from "../models/UserSchema.js";
import mongoose from "mongoose";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no dog")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to access this route");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

//validate the dog input
export const validateDogInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email").notEmpty().withMessage("name is required"),
  body("phoneNumber").notEmpty().withMessage("name is required"),
  body("age").notEmpty().withMessage("age is required"),
  body("breed").notEmpty().withMessage("breed is required"),
  body("location").notEmpty().withMessage("location is required"),
  body("description").notEmpty().withMessage("description is required"),
  body("image").notEmpty().withMessage("image is required"),
]);

//validate user update
export const validateUpdateUserInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email is not valid")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("lastName").notEmpty().withMessage("last name is required"),
]);

//validate user's register
export const validateUserRegister = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email is not valid")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("lastName").notEmpty().withMessage("last name is required"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters"),
]);

//validate user's login
export const validateUserLogin = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email is not valid"),
  body("password").notEmpty().withMessage("password is required"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("invalid MongoDB id");
    const dog = await Dog.findById(value);
    if (!dog) throw new NotFoundError(`no dog with id ${value}`);
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === dog.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw UnauthorizedError("not authorized to access this route");
  }),
]);
