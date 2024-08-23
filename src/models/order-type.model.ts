import { Model } from "objection";
import { Order } from "./order.model";

export class OrderType extends Model {
  static tableName = "order_types";

  id!: number;
  order_id!: number;
  name!: string;
  created_at!: Date;
  updated_at!: Date;

  static relationMappings = {
    order: {
      relation: Model.BelongsToOneRelation,
      modelClass: Order,
      join: {
        from: "order_types.order_id",
        to: "orders.id",
      },
    },
  };
}
