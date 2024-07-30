import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export class ValidatorMiddleware {
  public static validateResult(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array()})
      }
      next();
    } catch (error) {
      
    }
  }
}
