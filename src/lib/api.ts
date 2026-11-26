import type { ApiResponse, PaginationMeta, Product } from "@/types/product";

const API_BASE_URL = "https://v2.api.noroff.dev/online-shop";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function fetchFromApi<T>(path = ""): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new ApiError(
      `Request to ${path || "/"} failed with status ${response.status}`,
      response.status,
    );
  }

  return (await response.json()) as T;
}

export async function getProducts(): Promise<Product[]> {
  const json = await fetchFromApi<ApiResponse<Product[], PaginationMeta>>();
  return json.data;
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const json = await fetchFromApi<ApiResponse<Product>>(`/${id}`);
    return json.data;
  } catch (error) {
    if (
      error instanceof ApiError &&
      (error.status === 404 || error.status === 400)
    ) {
      return null;
    }
    throw error;
  }
}
