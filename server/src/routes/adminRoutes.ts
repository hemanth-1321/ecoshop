import express from "express";

import { adminLogin } from "../controllers/adminAuthControllers";

const router = express.Router();

router.post("/login", adminLogin);
