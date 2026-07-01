import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lab 2 — Server & Client Components',
  description: 'GROWURK Week 7 Lab 2',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto p-8">{children}</body>
    </html>
  );
}
