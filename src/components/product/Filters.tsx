import { useState } from 'react';
import { products } from '../../data/products';
import { Product } from '../../types';

interface FiltersProps {
  setFilteredProducts: (products: Product[]) => void;
  setCurrentPage: (page: number) => void;
}

export default function Filters({ setFilteredProducts, setCurrentPage }: FiltersProps) {
  const [query, setQuery] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [ram, setRam] = useState<string | null>(null);
  const [storage, setStorage] = useState<string | null>(null);
  const [processor, setProcessor] = useState<string | null>(null);

  const handleFilter = () => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    filtered = filtered.filter((product) => product.basePrice >= minPrice && product.basePrice <= maxPrice);

    if (ram) filtered = filtered.filter((product) => product.specs.defaultRam === ram);
    if (storage) filtered = filtered.filter((product) => product.specs.defaultStorage === storage);
    if (processor) filtered = filtered.filter((product) => product.specs.defaultProcessor === processor);

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Price"
        className="border p-2 rounded"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Max Price"
        className="border p-2 rounded"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      <select className="border p-2 rounded" onChange={(e) => setRam(e.target.value)}>
        <option value="">RAM</option>
        <option value="16GB">16GB</option>
        <option value="32GB">32GB</option>
        <option value="64GB">64GB</option>
      </select>
      <select className="border p-2 rounded" onChange={(e) => setStorage(e.target.value)}>
        <option value="">Storage</option>
        <option value="2TB SSD">2TB SSD</option>
        <option value="4TB SSD">4TB SSD</option>
      </select>
      <select className="border p-2 rounded" onChange={(e) => setProcessor(e.target.value)}>
        <option value="">Processor</option>
        <option value="Intel i3">Intel i3</option>
        <option value="Intel i5">Intel i5</option>
        <option value="Intel i7">Intel i7</option>
      </select>
      <button onClick={handleFilter} className="bg-blue-500 text-white px-4 py-2 rounded">
        Apply Filters
      </button>
    </div>
  );
}
