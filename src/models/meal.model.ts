import { Model } from "objection";
import { Brand } from "./brand.model";

export class Meal extends Model {
  static tableName = "meals";

  id!: number;
  brand_id!: number;
  amount!: number;
  internal_profit!: number;
  created_at!: Date;
  updated_at!: Date;

  static relationMappings = {
    brand: {
      relation: Model.BelongsToOneRelation,
      modelClass: Brand,
      join: {
        from: "meals.brand_id",
        to: "brands.id",
      },
    },
  };
}
