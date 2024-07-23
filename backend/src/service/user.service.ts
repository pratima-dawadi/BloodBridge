import { HealthCenter, User } from "../interfaces/user.interfaces";
import * as UserModel from "../model/user.model";
import bcrypt from "bcrypt";

export function getUsers() {
  return UserModel.UserModel.getUsers();
}

export function getUserById(id: number) {
  return UserModel.UserModel.getUserById(id);
}

export function updateUser(id: number, user: User) {
  return UserModel.UserModel.updateUser(id, user);
}

export async function createUser(user: User) {
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
  return UserModel.UserModel.createUser(user);
}

export async function createHealthCenter(user: HealthCenter) {
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
  return UserModel.UserModel.createHealthCenter(user);
}

export async function deleteUser(id: number) {
  return UserModel.UserModel.deleteUser(id);
}
