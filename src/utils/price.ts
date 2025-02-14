import { NodeConfig } from '../types';
import { RAM_OPTIONS, STORAGE_OPTIONS, PROCESSOR_OPTIONS } from '../config/constants';

export function calculatePrice(basePrice: string, config: NodeConfig): number {

  return Number(basePrice?.toString()?.split('$')[1]) +
    RAM_OPTIONS[config?.ram]?.price +
    STORAGE_OPTIONS[config?.storage]?.price +
    PROCESSOR_OPTIONS[config?.processor]?.price;
}