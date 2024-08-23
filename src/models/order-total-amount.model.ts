import { Model } from "objection";
import { Order } from "./order.model";

export class OrderTotalAmount extends Model {
  static tableName = "order_total_amounts";

  id!: number;
  order_id!: number;
  total_amount!: number;
  time!: Date;
  created_at!: Date;
  updated_at!: Date;

  static relationMappings = {
    order: {
      relation: Model.BelongsToOneRelation,
      modelClass: Order,
      join: {
        from: "order_total_amounts.order_id",
        to: "orders.id",
      },
    },
  };
}
