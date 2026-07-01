'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import type { CreateProductInput } from '@/types/forms';

export async function createProduct(input: CreateProductInput) {
  // Validate
  if (!input.name || input.price <= 0) {
    return { error: 'Name and a positive price are required.' };
  }

  // Create in database
  const product = await prisma.product.create({
    data: {
      name: input.name,
      price: input.price,
      stock: input.stock,
      categoryId: input.categoryId,
    },
  });

  // Invalidate the products page cache so it shows the new product
  revalidatePath('/products');
  return { success: true, product };
}

export async function deleteProduct(productId: number) {
  await prisma.product.delete({ where: { id: productId } });
  revalidatePath('/products');
}
