// import { FilterState } from '@/types/product';

import { brands, categories } from '../data/products';
import { FilterState } from '../types';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';
// import { brands, categories } from '@/data/products';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
}

const ramOptions = ['8GB', '16GB', '32GB'];
const processorOptions = ['Intel i5', 'Intel i7', 'M2'];
const ssdOptions = ['512GB', '1TB', '2TB'];

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  return (
    <div className="w-full p-4 space-y-6 bg-white rounded-lg shadow">
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <select
          className="w-full p-2 border rounded"
          value={filters.category}
          onChange={(e) => onFilterChange({ category: e.target.value })}
        >
          {categories.map((category:string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={[filters.minPrice]}
            min={0}
            max={2000}
            step={100}
            onValueChange={(value: number[]) => onFilterChange({ minPrice: value[0] })}
          />
          <div className="text-sm text-gray-600">
            Min: ${filters.minPrice} - Max: ${filters.maxPrice}
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={(e) => {
                  const newBrands = e.target.checked
                    ? [...filters.brands, brand]
                    : filters.brands.filter((b) => b !== brand);
                  onFilterChange({ brands: newBrands });
                }}
                className="rounded"
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">RAM</h3>
        <div className="space-y-2">
          {ramOptions.map((ram) => (
            <label key={ram} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.ram?.includes(ram)}
                onChange={(e) => {
                  const newRam = e.target.checked
                    ? [...(filters.ram || []), ram]
                    : (filters.ram || []).filter((r) => r !== ram);
                  onFilterChange({ ram: newRam });
                }}
                className="rounded"
              />
              <span>{ram}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Processor</h3>
        <div className="space-y-2">
          {processorOptions.map((processor) => (
            <label key={processor} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.processor?.includes(processor)}
                onChange={(e) => {
                  const newProcessor = e.target.checked
                    ? [...(filters.processor || []), processor]
                    : (filters.processor || []).filter((p) => p !== processor);
                  onFilterChange({ processor: newProcessor });
                }}
                className="rounded"
              />
              <span>{processor}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">SSD</h3>
        <div className="space-y-2">
          {ssdOptions.map((ssd) => (
            <label key={ssd} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.ssd?.includes(ssd)}
                onChange={(e) => {
                  const newSsd = e.target.checked
                    ? [...(filters.ssd || []), ssd]
                    : (filters.ssd || []).filter((s:any) => s !== ssd);
                  onFilterChange({ ssd: newSsd });
                }}
                className="rounded"
              />
              <span>{ssd}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Minimum Rating</h3>
        <select
          className="w-full p-2 border rounded"
          value={filters.minRating}
          onChange={(e) => onFilterChange({ minRating: Number(e.target.value) })}
        >
          {[0, 1, 2, 3, 4].map((rating) => (
            <option key={rating} value={rating}>
              {rating}+ Stars
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Availability</h3>
        <div className="flex items-center space-x-2">
          <Switch
            checked={filters.inStockOnly}
            onCheckedChange={(checked: boolean) => onFilterChange({ inStockOnly: checked })}
          />
          <span>In Stock Only</span>
        </div>
      </div>
    </div>
  );
}