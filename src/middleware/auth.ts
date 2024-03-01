import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY!) as {
        userId: string;
      };
      req.userId = decodedToken.userId;
      next();
    } else {
      return res.json({ status: 401, msg: "Unauthorized user", data: "" });
    }
  } catch (error: any) {
    return res.json({ status: 500, msg: error.message, data: "" });
  }
};

export { authMiddleware };
