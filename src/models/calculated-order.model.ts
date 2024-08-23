import { Model } from "objection";
import { Order } from "./order.model";

export class CalculatedOrder extends Model {
  static tableName = "calculated_orders";

  id!: number;
  order_id!: number;
  total_amount!: number;
  free_delivery!: boolean;
  delivery_fee!: number;
  service_charge!: number;
  address_details!: any;
  meals!: any;
  lat?: number;
  lng?: number;
  cokitchen_polygon_id?: string;
  user_id?: number;
  cokitchen_id?: number;
  pickup!: boolean;
  prev_price!: number;
  created_at!: Date;
  updated_at!: Date;

  static relationMappings = {
    order: {
      relation: Model.BelongsToOneRelation,
      modelClass: Order,
      join: {
        from: "calculated_orders.order_id",
        to: "orders.id",
      },
    },
  };
}
