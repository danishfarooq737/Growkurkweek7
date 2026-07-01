export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: Category;
  createdAt: Date;
}

export interface Category {
  id: number;
  name: string;
}

export interface Order {
  id: number;
  userId: number;
  total: number;
  status: OrderStatus;
  items: OrderItem[];
  createdAt: Date;
}

export type OrderStatus = 'PENDING' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

export interface OrderItem {
  id: number;
  productId: number;
  product: Product;
  quantity: number;
  price: number;
}

export interface User {
  id: number;
  email: string;
  name: string | null;
  createdAt: Date;
}
