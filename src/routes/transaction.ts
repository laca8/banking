import express from "express";
import { protect } from "../middlewares/auth";
import {
  transferMoney,
  depositMoney,
  withDrawMoney,
  getProcess,
} from "../controllers/transaction";
const router = express.Router();
router.post("/transfer", protect, transferMoney); //تحويل
router.post("/deposit", protect, depositMoney); //ايداع
router.post("/withdraw", protect, withDrawMoney); //سحب
router.get("/", protect, getProcess);
export default router;
