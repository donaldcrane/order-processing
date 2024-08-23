import { Model } from "objection";

export class Brand extends Model {
  static tableName = "brands";

  id!: number;
  name!: string;
  created_at!: Date;
  updated_at!: Date;
}
