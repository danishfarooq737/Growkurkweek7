'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useOptimistic, useTransition } from 'react';

export function SearchBar({ initialQuery }: { initialQuery: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [optimisticQuery, setOptimisticQuery] = useOptimistic(initialQuery);

  const handleSearch = (q: string) => {
    setOptimisticQuery(q); // Instant UI update
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      q ? params.set('q', q) : params.delete('q');
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="relative mb-6">
      <input
        value={optimisticQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full border rounded-lg px-4 py-2 pr-10"
      />
      {isPending && <span className="absolute right-3 top-2 text-gray-400">...</span>}
    </div>
  );
}
