import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { postController } from "../controllers/post.controller";

const router = Router();

// users
router.post("/user", userController.create);
router.get("/users", userController.readAll);

// posts
router.post("/post/:id", postController.create);

export default router;
