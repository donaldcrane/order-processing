import { Model } from "objection";
import { Order } from "./order.model";

export class Log extends Model {
  static tableName = "logs";

  id!: string;
  order_id!: string;
  time!: Date;
  description!: string;

  static relationMappings = {
    order: {
      relation: Model.BelongsToOneRelation,
      modelClass: Order,
      join: {
        from: "logs.order_id",
        to: "orders.id",
      },
    },
  };
}
