'use client';

import { useState } from 'react';
import type { CartItem } from '../types/cart.types';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (productId: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const removeItem = (productId: number) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  };

  return { items, addItem, removeItem };
}
