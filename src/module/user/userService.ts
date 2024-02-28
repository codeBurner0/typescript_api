import { Request, Response } from "express";
import User from "./userModel";
import { userInterface } from "./userInterface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userSchema } from "./userJoiSchema";

// CREATE ITEM SERVICE
const addUserService = async (body: userInterface): Promise<string> => {
  const { email, name, password } = body;
  const existingUser: userInterface | null = await User.findOne({
    $and: [{ email }, { name }],
  });
  if (existingUser) {
    return "User already exists";
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
const getAllUserService = (body: userInterface): Object => {
  return User.findOne({});
};

// GET ALL USER SERVICE
const getUserService = (id: string): Object => {
  return User.findOne({ _id: id });
};

export { addUserService, getAllUserService, getUserService };
