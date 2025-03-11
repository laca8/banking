import express from "express";
import { protect } from "../middlewares/auth";
import { addAcount, getAcount, getAcounts } from "../controllers/account";
const router = express.Router();
router.post("/", protect, addAcount);
router.get("/", protect, getAcounts);
router.get("/me", protect, getAcount);
export default router;
