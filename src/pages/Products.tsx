import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

import { FilterState, Product } from '../types';
import { FilterSidebar } from '../components/FilterSidebar';
import { Input } from '../components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { Button } from '../components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { useDebounce } from '../hooks/use-debounce';

const ITEMS_PER_PAGE = 6;

export default function Products() {
  // const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'All',
    minPrice: 0,
    maxPrice: 2000,
    brands: [],
    minRating: 0,
    inStockOnly: false,
    ram: [],
    processor: [],
    ssd: [],
  }); 

  const debouncedSearch = useDebounce(filters.search, 300);

  const filteredProducts = products.filter((product: Product) => {
    if (
      debouncedSearch &&
      !product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    ) {
      return false;
    }
    if (filters.category !== 'All' && product.category !== filters.category) {
      return false;
    }
    if (product.price < filters.minPrice || product.price > filters.maxPrice) {
      return false;
    }
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }
    if (product.rating < filters.minRating) {
      return false;
    }
    if (filters.inStockOnly && !product.inStock) {
      return false;
    }
    if (
      filters.ram.length > 0 &&
      !filters.ram.includes(product.specs.defaultRam || '')
    ) {
      return false;
    }
    if (
      filters.processor.length > 0 &&
      !filters.processor.includes(product.specs.defaultProcessor || '')
    ) {
      return false;
    }
    if (
      filters.ssd.length > 0 &&
      !filters.ssd.includes(product.specs.defaultStorage || '')
    ) {
      return false;
    }
    return true;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  return (
    <main className="min-h-screen bg-gray-50 py-8" id="products">
      <div className="container mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Choose Your Node Hardware
      </h2>
      
      
      {/* <Filters setFilteredProducts={setFilteredProducts} setCurrentPage={setCurrentPage} /> */}
      <div className="mb-8">
          <Input
            type="search"
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="max-w-md"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="md:hidden ">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[90%] sm:w-[400px] border-transparent">
                <div className="py-4">
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={(newFilters) =>
                      setFilters({ ...filters, ...newFilters })
                    }
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Filter Sidebar */}
          <div className="hidden md:block w-[300px] flex-shrink-0 ">
            <FilterSidebar
              filters={filters}
              onFilterChange={(newFilters) =>
                setFilters({ ...filters, ...newFilters })
              }
            />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product, id) => (
                <ProductCard key={product.id} product={product} index={id}  />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded ${
                      currentPage === i + 1
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>



      </div>
    </main>
  );
}
