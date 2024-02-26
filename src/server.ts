import express, { Request, Response } from "express";
import connectDB from "./connection/connectDB";
import dotenv from 'dotenv'
import fakeStoreRoute from './module/fakeStore/fakeStoreRoute'
const app: express.Application = express();

dotenv.config()

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use('/fake',fakeStoreRoute)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const startServer = async (): Promise<void> => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();