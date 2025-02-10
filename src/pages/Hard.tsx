import React from "react";
import { useParams } from "react-router-dom";
import phone from "../assets/Phone.png";
import hand from "../assets/hand.png";
import Truck from "../assets/Truck.png";
import { motion } from "framer-motion";
import { Product } from "../components/processor/type";
import { processorData } from "../components/processor";

// Define the type for a product

// Processor data with consistent structure

// Reusable product card component
const ProductCard: React.FC<{ product: Product; index: number }> = ({
  product,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-[#1A1B23] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/10 transition-shadow "
  >
    <div className="relative h-48">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-4">{product.name}</h3>
      <div className="space-y-2 text-gray-400 text-sm">
        <p>{product.processor}</p>
        <p>{product.casing}</p>
        <p>{product.gpu}</p>
        <p>{product.ram}</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 w-full bg-cyan-500 text-white py-3 px-4 rounded-lg hover:bg-cyan-600 transition-colors font-medium"
      >
        View Details
      </motion.button>
    </div>
  </motion.div>
);

function Hard() {
  const { type } = useParams<{ type: keyof typeof processorData }>();
  const data = type ? processorData[type] : null;

  if (!data) {
    return <div>Processor not found</div>;
  }

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden space-y-5">
        <div className="absolute inset-0">
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 mt-24 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6 max-w-3xl "
          >
            {data.title}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6 max-w-3xl  "
          >
            {data.title1}
          </motion.h1>
        </div>
      </div>
      <div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-black  p-5 mt-6 text-lg"
        >
          {data.description}
        </motion.p>
      </div>

      {/* Products Grid */}
      <main className=" px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </main>

      {/* Features Section */}
      <div className="bg-[#D1D1D6] shadow-md rounded-lg py-4 px-6 flex flex-col md:flex-row justify-between gap-6 items-center p-4 mb-4">
        {/* Feature 1 */}
        <div className="flex items-center gap-2 ">
          <img src={phone} alt="" />
          <span className="text-gray-700 text-sm">
            24/7 Customer support via Live chat and Telegram
          </span>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-2">
          <img src={hand} alt="" />
          <span className="text-gray-700 text-sm">
            1-year Manufacturer warranty
          </span>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-2">
          <img src={Truck} alt="" />
          <span className="text-gray-700 text-sm">
            Free shipping on orders over 5 items
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hard;
