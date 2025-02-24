import { ChevronDown } from "lucide-react";
import { useState } from "react";

const CasingAndCooling = () => {
  const [selectedCase, setSelectedCase] = useState(
    "Fractal Pop Air RGB Black Mid Tower TG."
  );
  const [selectedCooling, setSelectedCooling] = useState(
    "ARGB 120mm CPU Air Cooler."
  );
  const [selectedPowerSupply, setSelectedPowerSupply] = useState(
    "650W (80 Plus Bronze) Non-Modular."
  );

  const caseOptions = [
    "Fractal Pop Air RGB Black Mid Tower TG.",
    "NZXT H510 Black Mid Tower Case.",
    "Corsair iCUE 5000X RGB Tempered Glass Mid-Tower.",
  ];

  const coolingOptions = [
    "ARGB 120mm CPU Air Cooler.",
    "Noctua NH-D15 Chromax Black.",
    "Corsair iCUE H150i ELITE CAPELLIX.",
  ];

  const powerSupplyOptions = [
    "650W (80 Plus Bronze) Non-Modular.",
    "750W (80 Plus Gold) Fully Modular.",
    "850W (80 Plus Platinum) Fully Modular.",
  ];

  return (
    <div className="p-5 space-y-3">
      <div className="flex gap-8 items-center">
        <div className="bg-black rounded-full text-white w-[80px] h-[80px] flex justify-center items-center">
          <p className="text-[30px]">
            <strong>3</strong>
          </p>
        </div>
        <p className="text-[40px]">Casing and Cooling</p>
      </div>

      {/* Case Selection */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg w-[1200px]">
        <span className="text-sm font-medium ml-5">Case</span>
        <div className="relative border border-black rounded-lg flex items-center px-3">
          <select
            className="text-black text-sm px-4 py-2 pr-8 rounded-lg outline-none cursor-pointer w-[480px] appearance-none bg-white  border-none"
            value={selectedCase}
            onChange={(e) => setSelectedCase(e.target.value)}
          >
            {caseOptions.map((option, index) => (
              <option key={index} value={option} className="text-black">
                {option}
              </option>
            ))}
          </select>
          <div className="absolute right-3 pointer-events-none">
            <ChevronDown
              size={18}
              className="transition-transform duration-200"
            />
          </div>
        </div>
      </div>

      {/* Cooling Selection */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg w-[1200px]">
        <span className="text-sm font-medium ml-5">CPU Cooling</span>
        <div className="relative border border-black rounded-lg flex items-center px-3 ">
          <select
            className="text-black text-sm px-4 py-2 pr-8 rounded-lg outline-none cursor-pointer w-[480px] appearance-none bg-white  border-none"
            value={selectedCooling}
            onChange={(e) => setSelectedCooling(e.target.value)}
          >
            {coolingOptions.map((option, index) => (
              <option key={index} value={option} className="text-black">
                {option}
              </option>
            ))}
          </select>
          <div className="absolute right-3 pointer-events-none">
            <ChevronDown
              size={18}
              className="transition-transform duration-200"
            />
          </div>
        </div>
      </div>

      {/* Power Supply Selection */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg w-[1200px]">
        <span className="text-sm font-medium ml-5">Power Supply</span>
        <div className="relative border border-black rounded-lg flex items-center px-3 ">
          <select
            className="text-black text-sm px-4 py-2 pr-8 rounded-lg outline-none cursor-pointer appearance-none bg-white w-[480px] border-none"
            value={selectedPowerSupply}
            onChange={(e) => setSelectedPowerSupply(e.target.value)}
          >
            {powerSupplyOptions.map((option, index) => (
              <option key={index} value={option} className="text-black">
                {option}
              </option>
            ))}
          </select>
          <div className="absolute right-3 pointer-events-none">
            <ChevronDown
              size={18}
              className="transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasingAndCooling;
