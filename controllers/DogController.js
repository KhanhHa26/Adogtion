import { query } from "express";
import { StatusCodes } from "http-status-codes";
import Dog from "../models/DogSchema.js";

// Get all dogs
export const getAllDogs = async (req, res) => {
  //searching
  const { search, age, breed, location } = req.query;
  const queryObject = {};

  if (search) {
    queryObject.$or = [
      { location: { $regex: search, $options: "i" } },
      { age: { $regex: search, $options: "i" } },
      { breed: { $regex: search, $options: "i" } },
    ];
  }

  if (location && location !== "") {
    queryObject.location = { $regex: location, $options: "i" };
  }
  if (age && age !== "") {
    queryObject.age = { $regex: age, $options: "i" };
  }
  if (breed && breed !== "") {
    queryObject.breed = { $regex: breed, $options: "i" };
  }

  const dogs = await Dog.find(queryObject);
  res.status(StatusCodes.OK).json({ dogs });
};

// Create a new dog
export const createDog = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const dog = await Dog.create(req.body);
  res.status(StatusCodes.CREATED).json({ dog });
};

// Get a single dog
export const getDog = async (req, res) => {
  const dog = await Dog.findById(req.params.id);
  res.status(StatusCodes.OK).json({ dog });
};

// Update a dog
export const updateDog = async (req, res) => {
  const updateDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: "dog updated", dog: updateDog });
};

// Delete a dog
export const deleteDog = async (req, res) => {
  const removeDog = await Dog.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "dog deleted", dog: removeDog });
};
