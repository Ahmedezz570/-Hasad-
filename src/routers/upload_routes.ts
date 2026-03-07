import { Router } from "express";
import { uploadImage } from "../controllers/upload_controller";
import upload from "../middlewares/upload_middleware";
import { protect } from "../middlewares/auth_middleware";
import { uploadAvatar } from "../controllers/upload_controller";

const router = Router();

router.post("/image", protect, upload.single('image'), uploadImage);
router.post("/avatar", protect, upload.single('avatar'), uploadAvatar);
export default router;
