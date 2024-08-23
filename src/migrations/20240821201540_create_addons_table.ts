import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("addons", (table) => {
    table.increments("id").primary();
    table.integer("amount").notNullable();
    table.string("meal_id").notNullable();
    table.jsonb("meal_data").nullable().defaultTo({});
    table.integer("internal_profit").nullable();
    table.integer("position").nullable();
    table.integer("quantity").nullable();
    table.string("meal_addon_id").nullable();
    table.string("min_selection_no").nullable();
    table.string("meal_addon_category_id").nullable();
    table.jsonb("images").nullable().defaultTo([]);
    table.boolean("is_combo").defaultTo(false);
    table.jsonb("posist_data").nullable().defaultTo({});
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("addons");
}
