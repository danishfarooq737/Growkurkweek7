'use client';

import { useState } from 'react';

type Product = { id: number; name: string; price: number; category: { name: string } };

export function ProductGrid({ products }: { products: Product[] }) {
  const [cart, setCart] = useState<number[]>([]);
  const addToCart = (id: number) => setCart((prev) => [...prev, id]);

  return (
    <div>
      <p className="mb-4 text-sm text-gray-600">{cart.length} item(s) in cart</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <span className="text-xs text-purple-600">{product.category.name}</span>
            <h3 className="font-semibold mt-1">{product.name}</h3>
            <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product.id)}
              className="mt-3 w-full bg-purple-600 text-white py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
