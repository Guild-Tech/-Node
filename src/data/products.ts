import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'DappNode Mini',
    description: 'Compact and powerful node hardware',
    basePrice: 1200,
    image: '/images/dappnode-mini.jpg',
    specs: {
      defaultRam: '16GB',
      defaultStorage: '2TB SSD',
      defaultProcessor: 'Intel i3',
    },
  },
  {
    id: '2',
    name: 'Stereum Pro',
    description: 'Professional-grade node hardware',
    basePrice: 1800,
    image: '/images/stereum-pro.jpg',
    specs: {
      defaultRam: '32GB',
      defaultStorage: '4TB SSD',
      defaultProcessor: 'Intel i5',
    },
  },
  {
    id: '3',
    name: 'CoinCashew Ultra',
    description: 'Ultra-fast node for crypto staking',
    basePrice: 2500,
    image: '/images/coincashew-ultra.jpg',
    specs: {
      defaultRam: '64GB',
      defaultStorage: '4TB SSD',
      defaultProcessor: 'Intel i7',
    },
  },
];
