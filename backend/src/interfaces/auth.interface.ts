import { Request as ExpressRequest } from "express";

import { IUser } from "./user.interfaces";

export interface Request extends ExpressRequest {
  user?: IUser;
}
