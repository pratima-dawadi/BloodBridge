import { Knex } from "knex";

const TABLE_NAME = "request";

/**
 * Create table request.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .raw("CREATE TYPE supplier_type AS ENUM ('user', 'health_center')")
    .createTable(TABLE_NAME, (table) => {
      table.bigIncrements();
      table
        .bigInteger("requester_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table.enu("supplier_type", ["user", "health_center"]).notNullable();
      table.bigInteger("supplier_id").unsigned().notNullable();
      table.string("blood_type", 50).notNullable();
      table.integer("quantity").notNullable();
      table.boolean("urgency").notNullable().defaultTo(false);
      table.boolean("status").notNullable().defaultTo(false);
      table.date("request_date").notNullable();
      table.date("required_date").notNullable();

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
