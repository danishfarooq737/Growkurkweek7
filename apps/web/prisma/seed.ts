import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const electronics = await prisma.category.upsert({
    where: { name: 'Electronics' },
    update: {},
    create: { name: 'Electronics' },
  });

  const clothing = await prisma.category.upsert({
    where: { name: 'Clothing' },
    update: {},
    create: { name: 'Clothing' },
  });

  await prisma.product.createMany({
    data: [
      { name: 'Wireless Headphones', price: 59.99, categoryId: electronics.id },
      { name: 'Mechanical Keyboard', price: 89.99, categoryId: electronics.id },
      { name: 'Smart Watch', price: 129.99, categoryId: electronics.id },
      { name: 'Cotton T-Shirt', price: 19.99, categoryId: clothing.id },
      { name: 'Denim Jacket', price: 79.99, categoryId: clothing.id },
      { name: 'Running Shoes', price: 64.99, categoryId: clothing.id },
    ],
  });

  console.log('Seed data inserted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
