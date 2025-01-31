import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'mini-pc-1',
    name: 'EcoNode Starter',
    category: 'Mini PC',
    price: 599,
    basePrice: 599,
    brand: 'EcoNode',
    rating: 4.2,
    inStock: true,
    description: 'Perfect for beginners entering the Ethereum ecosystem. This energy-efficient setup comes with pre-configured node software and essential hardware specifications.',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '16GB',
      defaultStorage: '2TB SSD',
      defaultProcessor: 'Intel i3'
    }
  },
  {
    id: 'mini-pc-2',
    name: 'EcoNode Pro',
    category: 'Mini PC',
    price: 899,
    basePrice: 899,
    brand: 'EcoNode',
    rating: 4.5,
    inStock: true,
    description: 'Advanced configuration designed for serious validators and developers. Enhanced processing power and memory for superior performance.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '32GB',
      defaultStorage: '2TB SSD',
      defaultProcessor: 'Intel i5'
    }
  },
  {
    id: 'mini-pc-3',
    name: 'EcoNode Enterprise',
    category: 'Mini PC',
    price: 1299,
    basePrice: 1299,
    brand: 'EcoNode',
    rating: 4.7,
    inStock: true,
    description: 'Our flagship model for institutional validators and professional node operators. Maximum performance with enterprise-grade components.',
    image: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '64GB',
      defaultStorage: '4TB SSD',
      defaultProcessor: 'Intel i7'
    }
  },
  {
    id: 'mini-pc-4',
    name: 'EcoNode Lite',
    category: 'Mini PC',
    price: 499,
    basePrice: 499,
    brand: 'EcoNode',
    rating: 4.0,
    inStock: false,
    description: 'Compact and energy-efficient solution optimized for light node operators.',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '16GB',
      defaultStorage: '2TB SSD',
      defaultProcessor: 'Intel i3'
    }
  },
  {
    id: '2',
    name: 'ThinkPad X1 Carbon',
    category: 'Laptop',
    price: 1499,
    basePrice: 1499,
    brand: 'Lenovo',
    rating: 4.5,
    inStock: true,
    description: 'Premium business laptop with lightweight design and high-performance specs.',
    image: '/placeholder.svg',
    specs: {
      defaultRam: '64GB',
      defaultStorage: '4TB SSD',
      defaultProcessor: 'Intel i7'
    }
  }
];

export const categories = ['All', 'Laptop', 'DAppNode'];
export const brands = ['Apple', 'Lenovo', 'Avado'];