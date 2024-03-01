import { Request, Response } from "express";
import { Document } from "mongoose";
import User from "./userModel";
import { userInterface } from "./userInterface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// CREATE ITEM SERVICE
const addUserService = async (body: userInterface): Promise<string> => {
  const { email, name, password } = body;
  const existingUser: userInterface | null = await User.findOne({
    $and: [{ email }, { name }],
  });
  if (existingUser) {
    throw "User already exists";
  }

  const salt: string = await bcrypt.genSalt(10);
  const hashedPassword: string = await bcrypt.hash(password, salt);
  const newUser: userInterface = new User({
    password: hashedPassword,
    name: name,
    email: email,
  });

  await newUser.save();
  const token: string = jwt.sign(
    { userId: newUser._id },
    process.env.JWT_SECRET_KEY!
  );
  return token;
};

// GET ALL USERS SERVICE
const getAllUserService = async (): Promise<userInterface[] | null> => {
  return  User.find({});
};

// GET SINGLE USER SERVICE
const getUserService = async (id: string): Promise<userInterface | null> => {
  return  User.findOne({ _id: id });
};

export { addUserService, getAllUserService, getUserService };
