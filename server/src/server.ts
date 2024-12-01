import express, { Application, Request, Response } from "express";
import authRoutes from "./routes/authRoutes";
import adminRoutes from "./routes/adminRoutes";
import catgoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";
import cors from "cors";
import productReview from "./routes/ProductReviewRoute";
import getAllProdcuts from "./routes/getAllProducts";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();

const port: number = 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello from server");
});
app.use(cors());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/category", catgoryRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/allproducts", getAllProdcuts);

app.use("/api/v1/review", productReview);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
