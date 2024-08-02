import { JwtPayload, verify } from "jsonwebtoken";
import { NextFunction, Response } from "express";
import { Request } from "../interfaces/auth.interface";
import config from "../config";
import { IUser } from "../interfaces/user.interfaces";
import { UserModel } from "../model/user.model";
import { stringify } from "querystring";
import { DonorModel } from "../model/donor.model";
import { InventoryModel } from "../model/inventory.model";

/**
 * The function `auth` checks for a valid Bearer token in the request headers for authentication.
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {NextFunction} next - Callback Function
 * @returns Return an error message if the token is invalid or missing. Otherwise, it will call the next middleware.
 */
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.json({ message: "Unauthorized" });
  }

  const token = authorization!.split(" ");

  if (token.length !== 2 || token[0] !== "Bearer") {
    res.json({ message: "Token not found" });
  }

  try {
    const user = verify(token[1], config.jwt.secret!) as IUser;
    req.user = user;
    next();
  } catch (error) {
    res.json({ message: "Invalid token" });
  }
}

/**
 *function `authorize` checks the user's role and grants access based on specified permissions.
 * @param {string} permissions - represents the role or permission
 * @returns returns a JSON response with the message "Permission denied" if there is an error during the
 */
export function authorize(permissions: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user!;
    let userRole = "user";
    try {
      const donorFlag = await DonorModel.getDonorFlag(user.id);

      if (donorFlag.donorFlag === true) {
        userRole = "donor";
      }

      if (userRole !== permissions) {
        return res.json({ message: "Permission denied" });
      }
      next();
    } catch (error) {
      res.json({ message: "Failed to authorize user" });
    }
  };
}

/**
 * function `authorizeRole` -checks if a user has the specified permissions
 * @param {string} permissions - represents the role or permission level
 * @returns returns a JSON response with the message "Permission denied" if an error occurs
 */
export function authorizeRole(permissions: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user!;
    try {
      const userRole = await UserModel.getUserRole(user.id);
      if (userRole.userRole !== permissions) {
        return res.json({ message: "Permission denied" });
      }
      next();
    } catch (error) {
      res.json({ message: "Failed to authorize user" });
    }
  };
}
