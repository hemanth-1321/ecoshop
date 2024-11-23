import express, { Application, Request, Response } from "express";
import authRoutes from "./routes/authRoutes";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app: Application = express();

const port: number = 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello from server");
});

app.use("/api/v1/auth", authRoutes);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
