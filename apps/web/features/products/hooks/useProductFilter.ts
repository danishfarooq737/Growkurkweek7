'use client';

import { useState, useMemo } from 'react';

type FilterableProduct = { id: number; name: string; category: { name: string } };

// Example client-side filter hook used by the products feature.
// (Server-side filtering is handled via searchParams in Lab 2 — this is for
// any additional client-only filtering, e.g. a category toggle.)
export function useProductFilter<T extends FilterableProduct>(products: T[]) {
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!category) return products;
    return products.filter((p) => p.category.name === category);
  }, [products, category]);

  return { filtered, category, setCategory };
}
