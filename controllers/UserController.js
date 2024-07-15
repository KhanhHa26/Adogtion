import User from "../models/UserSchema.js";
import Dog from "../models/DogSchema.js";
import { StatusCodes } from "http-status-codes";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPass = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPass });
};

export const getDogStats = async (req, res) => {
  const users = await User.countDocuments();
  const dogs = await Dog.countDocuments();
  res.status(StatusCodes.OK).json({ users, dogs });
};

export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user.userId, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: "update user" });
};
