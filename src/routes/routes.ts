import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { PostController } from "../controllers/post.controller";

const router = Router();

// users
router.post("/user", UserController.create);
router.get("/users", UserController.readAll);

// posts
router.post("/post/:id", PostController.create);

export default router;
