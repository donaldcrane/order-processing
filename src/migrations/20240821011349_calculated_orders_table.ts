import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("calculated_orders", (table) => {
    table.increments("id").primary();
    table.integer("order_id").unsigned().notNullable().references("id").inTable("orders").onDelete("CASCADE");
    table.integer("total_amount").notNullable();
    table.boolean("free_delivery").defaultTo(false);
    table.integer("delivery_fee").notNullable();
    table.integer("service_charge").notNullable();
    table.jsonb("address_details").notNullable();
    table.jsonb("meals").notNullable();
    table.decimal("lat", 9, 6).nullable();
    table.decimal("lng", 9, 6).nullable();
    table.string("cokitchen_polygon_id").nullable();
    table.integer("user_id").nullable();
    table.integer("cokitchen_id").nullable();
    table.boolean("pickup").defaultTo(false);
    table.integer("prev_price").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("calculated_orders");
}
