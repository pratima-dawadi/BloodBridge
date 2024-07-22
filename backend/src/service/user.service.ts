import * as UserModel from "../model/user.model";

export function getUsers() {
  const data = UserModel.getUsers();
  return data;
}
