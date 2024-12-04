export interface Products {
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
  id: number;
  description?: string;
  brand?: string;
  warrantyInformation?: string;
  category?: string;
}

export interface ProductApiResponse {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}
