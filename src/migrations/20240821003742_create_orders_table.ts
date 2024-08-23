import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("orders", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable().references("id").inTable("users").onDelete("CASCADE");
    table.boolean("completed").defaultTo(false);
    table.boolean("cancelled").defaultTo(false);
    table.boolean("kitchen_cancelled").defaultTo(false);
    table.boolean("kitchen_accepted").defaultTo(false);
    table.boolean("kitchen_dispatched").defaultTo(false);
    table.timestamp("kitchen_dispatched_time").nullable();
    table.timestamp("completed_time").nullable();
    table.boolean("kitchen_prepared").defaultTo(false);
    table.boolean("rider_assigned").defaultTo(false);
    table.boolean("paid").defaultTo(false);
    table.string("order_code").notNullable().unique();
    table.text("order_change").nullable();
    table.boolean("shop_accepted").defaultTo(false);
    table.boolean("shop_prepared").defaultTo(false);
    table.integer("no_of_mealbags_delivered").defaultTo(0);
    table.integer("no_of_drinks_delivered").defaultTo(0);
    table.boolean("rider_started").defaultTo(false);
    table.boolean("rider_arrived").defaultTo(false);
    table.boolean("is_failed_trip").defaultTo(false);
    table.jsonb("failed_trip_details").defaultTo({});
    table.string("box_number").nullable();
    table.integer("shelf_id").nullable();
    table.boolean("scheduled").defaultTo(false);
    table.integer("confirmed_by_id").unsigned().notNullable().references("id").inTable("users").onDelete("CASCADE");
    table.integer("completed_by_id").unsigned().notNullable().references("id").inTable("users").onDelete("CASCADE");
    table.timestamp("scheduled_delivery_date").nullable();
    table.timestamp("scheduled_delivery_time").nullable();
    table.boolean("is_hidden").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("orders");
}
