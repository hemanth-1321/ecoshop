import express from "express";
import multer from "multer";
import { uploadImageToS3 } from "../config/uploadImageToS3";

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/upload", upload.single("file"), uploadImageToS3);

export default router;
