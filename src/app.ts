import express, { Request, Response } from "express";
import testRouter from "./routers/test_routers";
import authRouter from "./routers/auth_router";
import { protect } from "./middlewares/auth_middleware";
const app = express();


app.use(express.json());


app.use("/api/test", testRouter);
app.use("/api/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript is working ");
});

app.get("/profile", protect , (req: Request, res: Response) => {
  res.send(`Hello user with ID: ${(req as any).user.id}`);
});
export default app;