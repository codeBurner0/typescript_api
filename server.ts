import express, { Request, Response } from "express";
const app: express.Application = express();

const HOSTNAME: string = "127.0.0.1";
const PORT: number = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`server is started on http://${HOSTNAME}:${PORT}`);
});
