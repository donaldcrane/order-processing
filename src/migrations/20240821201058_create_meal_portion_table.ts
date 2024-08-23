import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("meal_portions", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("meal_id").unsigned().notNullable().references("id").inTable("meals").onDelete("CASCADE");
    table.integer("brand_id").unsigned().notNullable().references("id").inTable("brands").onDelete("CASCADE");
    table.boolean("active").defaultTo(false);
    table.integer("amount").notNullable();
    table.jsonb("images").notNullable();
    table.boolean("alcohol").defaultTo(false);
    table.integer("item_no").nullable();
    table.string("summary").nullable();
    table.string("calories").nullable();
    table.boolean("is_addon").defaultTo(false);
    table.boolean("is_combo").defaultTo(false);
    table.integer("position").notNullable();
    table.integer("quantity").notNullable();
    table.integer("internal_profit").notNullable();
    table.boolean("home_page").defaultTo(false);
    table.string("item_type").nullable();
    table.string("order_note").nullable();
    table.string("description").nullable();
    table.string("minumum_age").nullable();
    table.string("available_no").nullable();
    table.string("meal_category_id").nullable();
    table.jsonb("meal_tags").nullable().defaultTo([]);
    table.jsonb("meal_keywords").nullable().defaultTo([]);
    table.jsonb("posist_data").nullable().defaultTo({});
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("meal_portions");
}
