import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Accessories = () => {
  const [selectedAccessory, setSelectedAccessory] = useState(
    "Logitech Mk540 Wireless Keyboard and Mouse for Windows."
  );

  return (
    <div className="p-6 space-y-4">
      <div className="flex gap-8 items-center">
        <div className="bg-black rounded-full text-white w-[80px] h-[80px] flex justify-center items-center">
          <p className="text-[30px]">
            <strong>5</strong>
          </p>
        </div>
        <p className="text-[40px]">Accessories</p>
      </div>

      {/* Keyboard and Mouse */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg w-[1200px]">
        <span className="text-sm font-medium ml-5">Keyboard and Mouse</span>
        <div className="relative border border-black rounded-lg   p-3 w-[500px]  ">
          <label className="flex items-center justify-between  ">
            <span className="text-black text-sm">
              Logitech Mk540 Wireless Keyboard and Mouse for Windows.
            </span>
            <input
              type="radio"
              name="accessory"
              value="Logitech Mk540 Wireless Keyboard and Mouse for Windows."
              checked={true}
              className="form-radio text-black  "
              readOnly
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
