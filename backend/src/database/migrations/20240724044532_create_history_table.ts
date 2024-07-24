import { Knex } from "knex";

const TABLE_NAME = "history";

/**
 * Create table history.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .raw("CREATE TYPE transaction_type AS ENUM ('request', 'donation')")
    .createTable(TABLE_NAME, (table) => {
      table.bigIncrements();
      table.enum("transaction_type", ["request", "donation"]).notNullable();

      // from_user_id INT, -- ID of the user who initiated the transaction (donor or requester)
      // to_user_id INT, -- ID of the user who received the donation or request (optional, if applicable)

      table.string("blood_type", 50).notNullable();
      table.integer("quantity").notNullable();
      table.date("transaction_date").notNullable();

      table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));

      table
        .bigInteger("created_by")
        .unsigned()
        .nullable()
        .references("id")
        .inTable(TABLE_NAME);

      table.timestamp("updated_at").nullable();

      table
        .bigInteger("updated_by")
        .unsigned()
        .references("id")
        .inTable(TABLE_NAME)
        .nullable();
    });
}

/**
 * Drop table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
