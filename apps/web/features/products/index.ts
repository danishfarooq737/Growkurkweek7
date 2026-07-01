// Barrel export — everything the rest of the app needs from the "products"
// feature is imported through this single file, e.g.:
//   import { ProductGrid, SearchBar, createProduct } from '@/features/products';

export { ProductGrid } from './components/ProductGrid';
export { SearchBar } from './components/SearchBar';
export { createProduct, deleteProduct } from './actions/product.actions';
export { useProductFilter } from './hooks/useProductFilter';
export type { Product, CreateProductInput, ProductSummary } from './types/product.types';
