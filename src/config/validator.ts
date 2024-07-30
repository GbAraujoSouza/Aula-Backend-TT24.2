import { body, param, ValidationChain } from "express-validator";

export class Validator {
  public static validateUser(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("email")
          .exists()
          .withMessage("o email e obrigatorio")
          .isEmail()
          .withMessage("o email nao e valido"),

          body("nome")
          .optional({values:"null"})
          .isLength({min: 1})
          .withMessage("O nome nao pode ser vazio"),

          body("premium")
          .exists()
          .withMessage("o campo premium e obrigatorio")
          .isBoolean()
          .withMessage("o campo premium precisa ser um valor booleano"),
        ];

      default:
        return []
    }
  }
  public static validatePost(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("title")
          .exists()
          .withMessage("o campo title e obrigatorio")
          .isLength({min: 1})
          .withMessage("o campo title nao pode ser vazio"),

          body("content")
          .optional({values:"null"})
          .isLength({min: 1})
          .withMessage("o campo content nao pode ser vazio"),

          param("id")
          .exists()
          .withMessage("o parametro id e obriatorio")
          .isNumeric()
          .withMessage("o parametro id precisa ser um numero")
        ];

      default:
        return []
    }
  }
}
