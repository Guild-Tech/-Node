import React from "react";
import phone from "../assets/Phone.png";
import hand from "../assets/hand.png";
import Truck from "../assets/Truck.png";
const Features = () => {
  return (
    <div className="bg-[#D1D1D6] shadow-md rounded-lg py-4 px-6 flex flex-col md:flex-row justify-between gap-6 items-center p-5">
      {/* Feature 1 */}
      <div className="flex items-center gap-2">
        <img src={phone} alt="Customer Support" />
        <span className="text-gray-700 text-sm">
          24/7 Customer support via Live chat and Telegram
        </span>
      </div>

      {/* Feature 2 */}
      <div className="flex items-center gap-2">
        <img src={hand} alt="Warranty" />
        <span className="text-gray-700 text-sm">
          1-year Manufacturer warranty
        </span>
      </div>

      {/* Feature 3 */}
      <div className="flex items-center gap-2">
        <img src={Truck} alt="Free Shipping" />
        <span className="text-gray-700 text-sm">
          Free shipping on orders over 5 items
        </span>
      </div>
    </div>
  );
};

export default Features;
