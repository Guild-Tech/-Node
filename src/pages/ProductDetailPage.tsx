import  { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Cpu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
// import speaker from "../assets/speaker.png";
import phone from "../assets/Phone.png";
import hand from "../assets/hand.png";
import Truck from "../assets/Truck.png";
import { useNavigate } from "react-router-dom";
import PCBuilder from "./PCBuilder";
import { fetcher } from "../../services/api";

function ProductDetailPage() {
  const navigate = useNavigate();
  const handleAddToCart = () => {
    // Navigate to the cart page
    navigate("/cart");
  };

  const [isCustomize, setIsCustomize] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>();
  useEffect(() => {
    fetcher(`/products/${id}`).then((data) => {
      setProduct(data);
    })
  }, [id])

  console.log(product)
  return (
    <div className="min-h-screen bg-white ">
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
              <span>{product?.name}</span>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-3/2 -translate-y-2/2">
              <span className="text-3xl font-bold text-black">{product?.price}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="flex items-center gap-2 border border-cyan-500 text-black px-4 py-2 rounded-full hover:bg-cyan-500 transition"
                onClick={handleAddToCart}
              >
                Add to cart <ShoppingCart size={16} />
              </button>
              <button
                className="flex items-center gap-2 border border-cyan-500 text-black px-4 py-2 rounded-full hover:bg-cyan-500 transition"
                onClick={() => setIsCustomize(!isCustomize)}
              >
                Customize <Sparkles size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isCustomize ? (
        <div className="">
          <PCBuilder />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[500px] rounded-xl overflow-hidden flex justify-center"
          >
            <img src={product?.image} alt="Product" className=" flex justify-center" />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="text-[#0D1B2A] p-7">
              <p className="text-lg mb-4">
                {product?.details}
              </p>

              <p className="text-lg font-semibold">Windows 11 Ready!</p>

              <p className="flex items-center text-lg">
                <span className="mr-2">🚀</span> Best For: Running validator
                nodes ({product?.supported_blockchains.join(", ")})
              </p>
              

              <p className="flex items-center text-lg">
                <span className="mr-2">✅</span> Pre-installed Software: {product?.specs?.software}
              </p>
              <p className="flex items-center text-lg">
                <span className="mr-2">✅</span> Best for: {product?.pre_installed_software}
              </p> <p className="flex items-center text-lg">
                <span className="mr-2">✅</span> processor: {product?.processor}
              </p> <p className="flex items-center text-lg">
                <span className="mr-2">✅</span> ram: {product?.specs?.ram}
              </p> <p className="flex items-center text-lg">
                <span className="mr-2">✅</span> storage: {product?.specs?.storage}
              </p>

              {/* <p className="flex items-center text-lg">
                <span className="mr-2">⭐</span> Customer Ratings:{" "}
                <span className="">★★★★★ (4.9/5 from 23 reviews)</span>
              </p> */}
            </div>

            <div className="p-7 text-black">
              <h2 className="text-lg font-bold mb-2">
                📌 Why Choose This Product?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>No setup required</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>
                    Ideal for sharing - Secure, mobile, and energy efficient
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Easy to Pay - Contact support & earn rewards</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>
                    Future-proof - Supports major blockchain protocols
                  </span>
                </li>
              </ul>

              <h2 className="text-lg font-bold mt-4 mb-2">
                📌 What’s in the Box?
              </h2>
              <ul className="space-y-2 list-disc">
                <li className="flex items-center space-x-2">
                  <span>&#8226;</span>
                  <span>Multi-Mount Pro Hardware</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>&#8226;</span>
                  <span>User Manual & Thermal Guide</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>&#8226;</span>
                  <span>Quick Start Guide</span>
                </li>
              </ul>
            </div>
          </motion.div>
          {/* Features Section */}
          <div className="bg-[#D1D1D6] shadow-md rounded-lg py-4 px-6 flex flex-col md:flex-row justify-between gap-6 items-center p-5">
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
      )}
    </div>
  );
}

export default ProductDetailPage;
