export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

export async function fetchApi<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return { success: false, error: `HTTP ${res.status}: ${res.statusText}` };
    }
    const data = (await res.json()) as T;
    return { success: true, data };
  } catch (err) {
    return { success: false, error: 'Network error' };
  }
}

// Usage — TypeScript infers the full type:
// const result = await fetchApi<Product[]>('/api/products');
// if (result.success) {
//   result.data[0].name // TypeScript knows this is a string
// }
