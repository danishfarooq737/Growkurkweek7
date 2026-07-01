'use client';

import { useTransition, useState } from 'react';
import { createProduct } from '@/features/products';

export function AddProductForm({ categoryId }: { categoryId: number }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const result = await createProduct({
        name: data.get('name') as string,
        price: Number(data.get('price')),
        stock: Number(data.get('stock')),
        categoryId,
      });

      if (result.error) {
        setError(result.error);
      } else {
        setSuccess(true);
        form.reset();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">Product created!</p>}
      <input name="name" placeholder="Product name" required className="w-full border rounded px-3 py-2" />
      <input name="price" type="number" step="0.01" placeholder="Price" className="w-full border rounded px-3 py-2" />
      <input name="stock" type="number" placeholder="Stock" className="w-full border rounded px-3 py-2" />
      <button
        type="submit"
        disabled={isPending}
        className="bg-purple-600 text-white px-6 py-2 rounded disabled:opacity-50"
      >
        {isPending ? 'Creating...' : 'Create Product'}
      </button>
    </form>
  );
}
