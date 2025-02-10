import React from "react";
import { motion } from "framer-motion";
import AMD from "../../assets/AMD.png";
import { useNavigate } from "react-router-dom";
import intel from "../../assets/intel.png";

interface ProcessorCardProps {
  title: string;
  logo: "intel" | "amd";
  image: string;
  type: string;
}

export function ProcessorCard({
  title,
  logo,
  image,
  type,
}: ProcessorCardProps) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative h-48 rounded-xl overflow-hidden"
      onClick={() => navigate(`/processor/${type}`)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[253px] object-cover brightness-50 "
      />
      <div className="absolute inset-0 p-5">
        <img
          src={logo === "intel" ? intel : AMD}
          alt={logo}
          className="h-8 mb-4 opacity-75 w-[91.66px] h-[30.57px]"
        />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
        >
          Explore Products
        </motion.button>
      </div>
    </motion.div>
  );
}
