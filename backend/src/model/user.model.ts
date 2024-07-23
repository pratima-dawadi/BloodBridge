import { HealthCenter, User } from "../interfaces/user.interfaces";
import { BaseModel } from "./base.model";

export class UserModel extends BaseModel {
  static async getUsers() {
    const query = this.queryBuilder().select("*").from("users");
    const data = await query;
    return data;
  }

  static async getUserById(id: number) {
    const query = this.queryBuilder().select("*").from("users").where("id", id);
    const data = await query;
    return data;
  }

  static async updateUser(id: number, user: User) {
    const updateData = {
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      district: user.district,
      location: user.location,
      user_role: "user",
      donor_flag: user.donor_flag,
    };

    const query = this.queryBuilder()
      .update(updateData)
      .from("users")
      .where("id", id);
    const data = await query;

    const returnQuery = this.queryBuilder()
      .select("*")
      .from("users")
      .where("id", id);
    const returnData = await returnQuery;
    return returnData;
  }

  static async createUser(user: User) {
    const userToCreate = {
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      district: user.district,
      location: user.location,
      user_role: "user",
      donor_flag: user.donor_flag,
    };
    const query = this.queryBuilder().insert(userToCreate).into("users");
    const data = await query;
    return data;
  }

  static async createHealthCenter(user: HealthCenter) {
    const insertIntoUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      district: user.district,
      location: user.location,
      user_role: "health_center",
      donor_flag: user.donor_flag,
    };
    const query = this.queryBuilder().insert(insertIntoUser).into("users");
    const data = await query;

    if (data) {
      const getInsertedUser = this.queryBuilder()
        .select("id")
        .from("users")
        .where("email", user.email)
        .first();
      const userId = await getInsertedUser;

      const insertIntoHealthCenter = {
        userId: userId.id,
        image: user.images,
        type: user.type,
      };

      const query2 = this.queryBuilder()
        .insert(insertIntoHealthCenter)
        .into("health_center");

      const data2 = await query2;
      return data2;
    }
  }

  static async deleteUser(id: number) {
    const query = this.queryBuilder().delete().from("users").where("id", id);
    const data = await query;

    if (!data) {
      console.log(`User with id ${id} not found`);
      return "User not found";
    }
    return `User with id ${id} deleted`;
  }

  static async getUserByEmail(email: string) {
    const query = this.queryBuilder()
      .select("*")
      .from("users")
      .where("email", email)
      .first();
    const data = await query;
    return data;
  }

  static async getUserRole(id: string) {
    const query = this.queryBuilder()
      .select("user_role")
      .from("users")
      .where("id", id)
      .first();
    const data = await query;
    return data;
  }
}
