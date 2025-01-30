import { useState, useEffect } from 'react';
import { products } from '../../data/products';
import Filters from './Filters';
import { Product } from '../../types';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
// import { products } from '../data/products';
// import ProductCard from '../components/product/ProductCard';
// import Pagination from '../components/product/Pagination';
// import Filters from '../components/product/Filters';
// import { Product } from '../types';

const ITEMS_PER_PAGE = 6;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page:any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="container mx-auto px-4 py-8 sm:py-16" id="products">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Choose Your Node Hardware
      </h2>
      
      <Filters setFilteredProducts={setFilteredProducts} setCurrentPage={setCurrentPage} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {currentProducts.map((product:Product, index:number) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </main>
  );
}
