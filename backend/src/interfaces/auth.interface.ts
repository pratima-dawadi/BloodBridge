import { Request as ExpressRequest } from "express";

import { IUser } from "./user.interfaces";

import { Multer } from "multer";

export interface Request extends ExpressRequest {
  user?: IUser;
}

export interface FileRequest extends Request {
  file?: Express.Multer.File;
}
