import { Router } from "express";
import { createPreference, processPayment } from "../controllers/paymentsController.js";

const router = Router();

router.post("/create_preference", createPreference);
router.post("/process_payment", processPayment);

export default router;
