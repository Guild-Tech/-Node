import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  price: string;
  rating: number;
  imageUrl: string;
  productId: string;
}

export function Card({ title, price, rating, imageUrl, productId }: CardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative h-48 overflow-hidden"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="p-5">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className={`${
                index < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-400"
              }`}
            />
          ))}
        </div>

        <motion.h3
          whileHover={{ scale: 1.02 }}
          className="text-xl font-bold text-white mb-2"
        >
          {title}
        </motion.h3>

        <motion.p
          whileHover={{ scale: 1.02 }}
          className="text-[#717BBC] font-semibold"
        >
          {price}
        </motion.p>

        <div className="flex justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/product/${productId}`)}
            className="mt-4 w-[134px] bg-cyan-500 text-white py-2 px-4 rounded-lg 
                   hover:bg-cyan-600 transition-colors duration-200"
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
