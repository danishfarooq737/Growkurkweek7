import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Week 7 Labs</h1>
      <p className="mb-4 text-gray-600">
        This project is wired to a Railway Postgres database.
      </p>
      <div className="flex gap-4">
        <Link href="/products" className="text-purple-600 underline">
          Go to /products →
        </Link>
        <Link href="/admin" className="text-purple-600 underline">
          Go to /admin →
        </Link>
      </div>
    </div>
  );
}