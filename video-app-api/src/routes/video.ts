import { Router } from "express";
import * as VideoController from "../controllers/video";
import { validVideoUrl } from "../middlewares/video";

const router: Router = Router();

router.post("/", validVideoUrl, VideoController.saveVideo);
router.get("/", VideoController.getVideos);

export default router;
