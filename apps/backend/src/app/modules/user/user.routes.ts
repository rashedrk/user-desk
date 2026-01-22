import { Router, type Router as RouterType } from "express";
import { UserController } from "./user.controller";

const router: Router = Router();

router.get("/", UserController.getAllUsers);

export const UserRoutes: RouterType = router;
