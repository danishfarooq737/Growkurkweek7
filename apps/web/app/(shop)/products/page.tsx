import { prisma } from '@/lib/prisma';
import { ProductGrid, SearchBar } from '@/features/products';

export const dynamic = 'force-dynamic';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string; q?: string };
}) {
  const products = await prisma.product.findMany({
    where: {
      ...(searchParams.category && { category: { name: searchParams.category } }),
      ...(searchParams.q && { name: { contains: searchParams.q, mode: 'insensitive' } }),
    },
    include: { category: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <SearchBar initialQuery={searchParams.q ?? ''} />
      <ProductGrid products={products} />
    </div>
  );
}