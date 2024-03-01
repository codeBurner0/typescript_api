import { Request, Response } from "express";
import {
  addUserService,
  getAllUserService,
  getUserService,
} from "./userService";

// ADD USER CONTROLLER
const addUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const body = req.body;
    const user = await addUserService(body);
    return res
      .status(201)
      .json({ msg: "user create successfully", data: user });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// GET ALL USERS CONTROLLER
const getAllUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await getAllUserService();
    return res
      .status(200)
      .json({ msg: "all users fetch successfully", data: user });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// GET USER CONTROLLER
const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id;
    const user = await getUserService(id);
    if (user === null) {
      return res.status(400).json({ msg: "no user found", data: user });
    }
    return res.status(200).json({ msg: "user fetch successfully", data: user });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

export { addUserController, getAllUserController, getUserController };
