import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { PostController } from "../controllers/post.controller";
import { PremiumMiddleware } from "../middlewares/premium.middleware";
import { ValidatorMiddleware } from "../middlewares/validator.middleware";
import { Validator } from "../config/validator";

const router = Router();

// users
router.post(
  "/user",
  Validator.validateUser("create"),
  ValidatorMiddleware.validateResult,
  UserController.create,
);
router.get("/users", UserController.readAll);

// posts
router.post(
  "/post/:id",
  Validator.validatePost("create"),
  ValidatorMiddleware.validateResult,
  PremiumMiddleware.checkPremium,
  PostController.create,
);

export default router;
