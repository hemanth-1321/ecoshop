import express from "express";
import { AuthMiddleWare } from "../middleware/authMiddleware";
import { getAllProducts } from "../controllers/productControllers";

const router = express.Router();

router.get("/products", AuthMiddleWare, getAllProducts);
export default router;
