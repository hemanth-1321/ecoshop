import express from "express";
import { AddProducts } from "../controllers/productControllers";
import { AuthMiddleWare } from "../middleware/authMiddleware";
const router = express.Router();
router.post("/addItem/:categoryId", AuthMiddleWare, AddProducts);

export default router;
