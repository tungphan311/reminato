import { Router } from "express";
import * as AuthController from "../controllers";
import validateUser from "../middlewares/user";

const router: Router = Router();

router.get("/", AuthController.getAuthenticatedUser);
router.post("/", validateUser, AuthController.authentication);
router.post("/logout", AuthController.logout);

export default router;
