import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("order_total_amounts", (table) => {
    table.increments("id").primary();
    table.integer("order_id").unsigned().notNullable().references("id").inTable("orders").onDelete("CASCADE");
    table.timestamp("time").notNullable();
    table.integer("total_amount").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("order_total_amounts");
}
