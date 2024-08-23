export interface UserPayLoad {
  id: number;
  email: string;
  role: UserRole;
  name: string;
  phone?: string;
  photo?: string;
}

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  RIDER = "rider",
}
