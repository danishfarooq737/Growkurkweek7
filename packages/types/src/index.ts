// Save this file as: packages/types/src/index.ts (inside your Turborepo workspace)
// Move your domain types (Product, Order, User) here from Lab 3's types/index.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  createdAt: Date;
}

export interface Order {
  id: number;
  userId: number;
  total: number;
  createdAt: Date;
}

export interface User {
  id: number;
  email: string;
  name: string | null;
}
