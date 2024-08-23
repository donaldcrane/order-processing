import { Model } from "objection";
import { Log } from "./log.model";
import { CalculatedOrder } from "./calculated-order.model";
import { User } from "./user.model";

export class Order extends Model {
  static tableName = "orders";

  id!: string;
  user_id!: number;
  total_amount!: number;
  no_of_mealbags_delivered!: number;
  no_of_drinks_delivered!: number;
  shelf_id!: number;
  confirmed_by_id!: number;
  completed_by_id!: number;
  completed!: boolean;
  scheduled!: boolean;
  cancelled!: boolean;
  kitchen_accepted!: boolean;
  kitchen_cancelled!: boolean;
  kitchen_dispatched!: boolean;
  kitchen_prepared!: boolean;
  rider_assigned!: boolean;
  rider_id!: number;
  paid!: boolean;
  shop_accepted!: boolean;
  shop_prepared!: boolean;
  rider_started!: boolean;
  rider_arrived!: boolean;
  is_failed_trip!: boolean;
  is_hidden!: boolean;
  order_code!: string;
  failed_trip_details!: object;
  box_number!: string;
  kitchen_dispatched_time!: Date;
  scheduled_delivery_date!: Date;
  scheduled_delivery_time!: Date;
  completed_time!: Date;
  calculatedOrder!: CalculatedOrder;
  created_at!: Date;
  updated_at!: Date;

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "orders.user_id",
        to: "users.id",
      },
    },
    rider: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "orders.rider_id",
        to: "users.id",
      },
    },
    confirmedBy: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "orders.confirmed_by_id",
        to: "users.id",
      },
    },

    completed_by_id: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "orders.completed_by_id",
        to: "users.id",
      },
    },
  };
}
