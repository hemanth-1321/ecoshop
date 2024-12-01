import express from "express";
import {
  AddProducts,
  DeleteProduct,
  EditProduct,
  getAllProducts,
  getProductByCategory,
  getProductById,
} from "../controllers/productControllers";
import { verifyAdmin } from "../controllers/adminAuthControllers";
import { upload } from "./multer";
import { AuthMiddleWare } from "../middleware/authMiddleware";

const router = express.Router();
router.post("/addItem/:categoryId", verifyAdmin, upload, AddProducts);
router.put("/edit/:productId", verifyAdmin, EditProduct);
router.delete("/delete/:productId", verifyAdmin, DeleteProduct);

router.get("/category/:name", AuthMiddleWare, getProductByCategory);
router.get("/:id", AuthMiddleWare, getProductById);

router.get("/allprodcuts", AuthMiddleWare, getAllProducts);

export default router;
