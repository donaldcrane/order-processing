import { Model } from "objection";
import { UserRole } from "src/auth/types";

export class User extends Model {
  static tableName = "users";

  id!: number;
  name!: string;
  email!: string;
  password!: string;
  phone!: string;
  photo!: string;
  role!: UserRole;
  created_at!: Date;
  updated_at!: Date;
}
