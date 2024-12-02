import express, { Application, Request, Response } from "express";
import authRoutes from "./routes/authRoutes";
import adminRoutes from "./routes/adminRoutes";
import catgoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";

import productReview from "./routes/ProductReviewRoute";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();

const port: number = 1000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello from server");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/category", catgoryRoutes);
app.use("/api/v1/products", productRoutes);

app.use("/api/v1/review", productReview);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
