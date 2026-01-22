import { Router, type Router as RouterType } from "express";
import { UserController } from "./user.controller";

const router: Router = Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.patch("/:id/toggle-active", UserController.updateStatus);

export const UserRoutes: RouterType = router;
