import express, { Request, Response } from "express";
import testRouter from "./routers/test_routers";
const app = express();


app.use(express.json());


app.use("/api/test", testRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript is working ");
});
export default app;