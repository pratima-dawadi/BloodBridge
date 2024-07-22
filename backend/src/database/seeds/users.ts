import { Knex } from "knex";

const TABLE_NAME = "users";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          name: "admin",
          email: "admin@gmail.com",
          password: "Admin@1234",
          phone: "1234567890",
          district: "Kathmandu",
          location: "Raniban",
          user_role: "admin",
          donor_flag: false,
        },
      ]);
    });
}
