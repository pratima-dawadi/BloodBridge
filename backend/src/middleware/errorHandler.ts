import { Request, NextFunction, Response } from "express";
import HTTPStatusCodes from "http-status-codes";
import { UnauthenthicatedError } from "../error/UnauthenticatedError";
import { BadRequestError } from "../error/BadRequestError";

export function notFoundError(req: Request, res: Response) {
  return res.status(HTTPStatusCodes.NOT_FOUND).json({
    message: "Not Found",
  });
}

export function genericErrorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof UnauthenthicatedError) {
    return res.status(HTTPStatusCodes.UNAUTHORIZED).json({
      message: error.message,
    });
  }

  if (error instanceof BadRequestError) {
    return res.status(HTTPStatusCodes.BAD_REQUEST).json({
      message: error.message,
    });
  }

  return res.status(HTTPStatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "Internal Server Error",
  });
}
