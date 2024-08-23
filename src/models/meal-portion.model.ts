import { Model } from "objection";
import { Meal } from "./meal.model";
import { Brand } from "./brand.model";

export class MealPortion extends Model {
  static tableName = "meal_portions";

  id!: number;
  name!: string;
  meal_id!: number;
  brand_id!: number;
  active!: boolean;
  amount!: number;
  images!: any; // Assuming images are stored as JSON
  alcohol!: boolean;
  item_no?: number;
  summary?: string;
  calories?: string;
  is_addon!: boolean;
  is_combo!: boolean;
  position!: number;
  quantity!: number;
  internal_profit!: number;
  home_page!: boolean;
  item_type?: string;
  order_note?: string;
  description?: string;
  minumum_age?: string;
  available_no?: string;
  meal_category_id?: string;
  meal_tags?: any; // Assuming meal_tags are stored as JSON
  meal_keywords?: any; // Assuming meal_keywords are stored as JSON
  posist_data?: any; // Assuming posist_data is stored as JSON
  created_at!: Date;
  updated_at!: Date;

  static relationMappings = {
    meal: {
      relation: Model.BelongsToOneRelation,
      modelClass: Meal,
      join: {
        from: "meal_portions.meal_id",
        to: "meals.id",
      },
    },
    brand: {
      relation: Model.BelongsToOneRelation,
      modelClass: Brand,
      join: {
        from: "meal_portions.brand_id",
        to: "brands.id",
      },
    },
  };
}
