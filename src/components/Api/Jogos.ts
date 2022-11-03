export interface Product {
  name: string;
  categoria: string;
  description: string;
  imageUrl: string;
  ano: number;
  score: number;
  treiler: string;
  gameplay: string;
}

export interface ProductUpdate {
  product: Product;
  id: string;
}

export interface jogosResponse {
  id: string;
  name: string;
  description: string;
  image: string;
  ano: number;
  score: number;
  treiler: string;
  gameplay: string;
  updatedAt?: string;
  createdAt?: string;
}
