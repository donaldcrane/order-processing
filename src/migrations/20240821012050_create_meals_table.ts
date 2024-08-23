import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("meals", (table) => {
    table.increments("id").primary();
    table.integer("brand").unsigned().notNullable().references("id").inTable("brands").onDelete("CASCADE");
    table.integer("amount").notNullable();
    table.integer("internal_profit").defaultTo(0);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("meals");
}
