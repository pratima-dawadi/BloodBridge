import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

/**
 * function `validateReqBody` -validates the request body
 * @param {Schema} schema - used to define the structure and validation rules for the request body
 * @returns If there is an error in the validation, it will return the error message. If the validation is successful, it will update the
 * request
 */
export function validateReqBody(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json(error.message);
    }

    req.body = value;
    next();
  };
}
