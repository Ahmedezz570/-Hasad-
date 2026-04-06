import { Router } from "express";
import { protect } from "../middlewares/auth_middleware";
import { chatWithAI } from "../controllers/chat_controller";

const router = Router();

router.post("/", protect, chatWithAI);

export default router;