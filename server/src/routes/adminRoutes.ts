import express from "express";

import { adminLogin, verifyAdmin } from "../controllers/adminAuthControllers";
import { Categories } from "../controllers/categoryController";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/AdminCategories", verifyAdmin, Categories);
export default router;
