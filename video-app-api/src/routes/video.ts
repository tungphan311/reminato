import { Router } from "express";
import * as VideoController from "../controllers/video";

const router: Router = Router();

router.post("/", VideoController.saveVideo);

export default router;
