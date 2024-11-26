import express from "express";
import {
  AddProducts,
  DeleteProduct,
  EditProduct,
} from "../controllers/productControllers";
import { verifyAdmin } from "../controllers/adminAuthControllers";

const router = express.Router();
router.post("/addItem/:categoryId", verifyAdmin, AddProducts);
router.put("/edit/:productId", verifyAdmin, EditProduct);
router.delete("/delete/:productId", verifyAdmin, DeleteProduct);

export default router;
