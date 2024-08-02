import { IHealthCenter, IUser } from "../interfaces/user.interfaces";
import * as UserModel from "../model/user.model";
import bcrypt from "bcrypt";

export function getUsers() {
  return UserModel.UserModel.getUsers();
}

export function getHealthCenterID(userId: string) {
  return UserModel.UserModel.getHealthCenterID(userId);
}

export function getHealthCenters() {
  return UserModel.UserModel.getHealthCenters();
}

export function getDonors() {
  return UserModel.UserModel.getDonors();
}

export function getUserById(id: number) {
  return UserModel.UserModel.getUserById(id);
}

export function getUsersDetailsById(id: number) {
  return UserModel.UserModel.getUsersDetailsById(id);
}

export function getDetails(userId: string) {
  return UserModel.UserModel.getDetails(userId);
}

export function updateUser(id: number, user: IUser) {
  return UserModel.UserModel.updateUser(id, user);
}

export async function createUser(user: IUser) {
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
  return UserModel.UserModel.createUser(user);
}

export async function createHealthCenter(user: IHealthCenter) {
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
  return UserModel.UserModel.createHealthCenter(user);
}

export async function deleteUser(id: number) {
  return UserModel.UserModel.deleteUser(id);
}

export async function updateUserById(id: number, body: IUser) {
  return UserModel.UserModel.updateUserById(id, body);
}
