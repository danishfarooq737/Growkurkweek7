'use client';

import { useOptimistic, useTransition } from 'react';
import { deleteProduct } from '@/features/products';
import type { Product } from '@prisma/client';

export function ProductList({ products }: { products: Product[] }) {
  const [optimisticProducts, removeOptimistic] = useOptimistic(
    products,
    (state, deletedId: number) => state.filter((p) => p.id !== deletedId)
  );
  const [, startTransition] = useTransition();

  const handleDelete = (id: number) => {
    startTransition(async () => {
      removeOptimistic(id); // Instant UI update
      await deleteProduct(id); // Server catches up
    });
  };

  return (
    <ul className="space-y-2">
      {optimisticProducts.map((product) => (
        <li key={product.id} className="flex justify-between items-center border rounded p-3">
          <span>
            {product.name} — ${product.price}
          </span>
          <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:underline text-sm">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
