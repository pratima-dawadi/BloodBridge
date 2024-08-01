import bcrypt from "bcrypt";
import { IUser } from "../interfaces/user.interfaces";
import * as UserModel from "../model/user.model";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import config from "../config";

/**
 * The function `login` hverify credentials and generate access and refresh tokens upon successful login.
 * @param body - Users credentials
 * @returns Return an error message if the email or password is invalid. Otherwise, it will generate an access token and a refresh token.
 */
export async function login(body: Pick<IUser, "email" | "password">) {
  const existingUser = await UserModel.UserModel.getUserByEmail(body.email);
  if (!existingUser) {
    return "Invalid email or password";
  }

  const isValidPassword = await bcrypt.compare(
    body.password,
    existingUser.password
  );

  if (!isValidPassword) {
    return "Invalid email or password";
  }

  const payload = {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    permission: existingUser.permission,
  };

  const accessToken = sign(payload, config.jwt.secret!, {
    expiresIn: config.jwt.accessTokenExpiryMS,
  });

  const refreshToken = sign(payload, config.jwt.secret!, {
    expiresIn: config.jwt.refreshTokenExpiryMS,
  });

  return {
    accessToken,
  };
}
