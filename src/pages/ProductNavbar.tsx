import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Sparkles } from "lucide-react";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-8 p-5">
      {/* Header */}
      <Link
        to="/products"
        className="flex items-center justify-center w-8 h-8 border rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition"
      >
        <ArrowLeft size={16} />
      </Link>

      <div className=" gap-4 border-2 border-dashed border-gray-400 p-4 rounded-lg w-full ">
        <div className=" flex items-center gap-4 justify-between">
          <div className="flex-1 text-black text-3xl font-bold">
            <span>Ryzen B650 MATX</span>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-3/2 -translate-y-2/2">
            <span className="text-3xl font-bold text-black">₦900,000</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 border border-cyan-500 text-black px-4 py-2 rounded-full hover:bg-cyan-500 transition">
              Add to cart <ShoppingCart size={16} />
            </button>
            <button
              className="flex items-center gap-2 border border-cyan-500 text-black px-4 py-2 rounded-full hover:bg-cyan-500 transition"
              onClick={() => navigate("/pcbuilder")}
            >
              Customize <Sparkles size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
