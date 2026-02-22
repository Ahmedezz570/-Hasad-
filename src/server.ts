import express, { Request, Response } from "express";

const app = express();
const PORT = 10000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript is working ");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});