export interface Product {
  name: string;
  processor: string;
  casing: string;
  gpu: string;
  ram: string;
  image: string;
}

// Define the type for processor data
export interface ProcessorType {
  title: string;
  title1: string;
  description: string;
  heroImage: string;
  products: Product[];
}
