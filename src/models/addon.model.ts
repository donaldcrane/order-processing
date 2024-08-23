import { Model } from "objection";
import { Meal } from "./meal.model";

export class Addon extends Model {
  static tableName = "addons";

  id!: number;
  amount!: number;
  meal_id!: string;
  meal_data!: object;
  internal_profit!: number | null;
  position!: number | null;
  quantity!: number | null;
  meal_addon_id!: string | null;
  min_selection_no!: string | null;
  meal_addon_category_id!: string | null;
  images!: string[];
  is_combo!: boolean;
  posist_data!: object;
  created_at!: Date;
  updated_at!: Date;

  static relationMappings = {
    meal: {
      relation: Model.BelongsToOneRelation,
      modelClass: Meal,
      join: {
        from: "addons.meal_id",
        to: "meals.id",
      },
    },
  };
}
