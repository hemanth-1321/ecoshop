import express from "express";
import {
  getProductReviews,
  ProductReview,
} from "../controllers/ProductReviewController";
import { AuthMiddleWare } from "../middleware/authMiddleware";
import { getAllProducts } from "../controllers/productControllers";
const router = express.Router();

router.post("/add", AuthMiddleWare, ProductReview);
router.get("/all/:productId", AuthMiddleWare, getProductReviews);
export default router;
