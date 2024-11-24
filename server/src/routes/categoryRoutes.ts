import express from "express";
import { AuthMiddleWare } from "../middleware/authMiddleware";
import { Categories } from "../controllers/categoryController";
const router = express.Router();

router.get("/categories", AuthMiddleWare, Categories);

export default router;
