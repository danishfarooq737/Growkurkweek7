import { prisma } from '@/lib/prisma';
import { AddProductForm } from './AddProductForm';
import { ProductList } from './ProductList';

export default async function AdminPage() {
  const categories = await prisma.category.findMany();
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const defaultCategoryId = categories[0]?.id;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin — Products</h1>

      {defaultCategoryId ? (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Add Product</h2>
          <p className="text-sm text-gray-500 mb-3">
            New products will be added under category:{' '}
            <span className="font-medium">{categories[0].name}</span>
          </p>
          <AddProductForm categoryId={defaultCategoryId} />
        </div>
      ) : (
        <p className="text-red-600 mb-10">
          No categories found — run your seed script first (npm run seed).
        </p>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-3">Existing Products</h2>
        <ProductList products={products} />
      </div>
    </div>
  );
}
