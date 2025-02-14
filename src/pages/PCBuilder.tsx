import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Storage from "./Storage";
import CasingAndCooling from "./CasingAndCooling";
import Software from "./Software";
import Accessories from "./Accessories";
import CourtesyInstall from "./CourtesyInstall";
import AdditionalComments from "./AdditionalComments";
// import { RAM_OPTIONS, STORAGE_OPTIONS, PROCESSOR_OPTIONS } from '../config/constants';

import Features from "./Features";
const SystemCostCard: React.FC<{ price: string }> = ({ price }) => (
  <div className="bg-white shadow-lg rounded-[26px] overflow-hidden w-[350px] h-[250px] text-center border rounded-t-4xl space-y-6">
    <div className="bg-black text-white py-3 text-lg font-bold rounded-t-3xl">
      System cost
    </div>
    <div className="py-6 text-3xl font-bold text-cyan-500">₦{price}</div>
    <div className="pb-4">
      <button className="bg-black text-white px-6 py-2 rounded-[16px] w-[200px]">
        Add to cart
      </button>
    </div>
  </div>
);

const PCBuilder = () => {

  const [selectedCPU, setSelectedCPU] = useState(
    "Intel Core i5 12400f 2.5GHz (Up To 4.4GHz Turbo) 6 Core 65W."
  );
  const [selectedRAM, setSelectedRAM] = useState("16GB DDR5-5600 (2x8GB)");
  // const [selectedGPU, setSelectedGPU] = useState(
  //   "NVIDIA GeForce RTX 3060 12GB"
  // );

  const [isOpenCPU, setIsOpenCPU] = useState(false);
  const [isOpenRAM, setIsOpenRAM] = useState(false);
  // const [isOpenGPU, setIsOpenGPU] = useState(false);

  const cpuOptions = [
    "Intel Core i3 ",
    "Intel Core i5 $150",
    "Intel Core i7 $300",
    // "Apple M1 Max (10-core CPU, 32-core GPU).",
  ];
  // const [additionalGPU, setAdditionalGPU] = useState("");

  const ramOptions = [
    "16GB DDR5-5600 ",
    "32GB DDR5-6000 $100",
    "64GB DDR5-6400 $300",
  ];

  const primaryStorageOptions = [
    "1TB SSD  SSD ",
    "2TB SSD SSD $100",
    "4TB SSD SSD $200",
  ];
  

  // const gpuOptions = [
  //   "NVIDIA GeForce RTX 3060 12GB",
  //   "NVIDIA GeForce RTX 4070 Ti 16GB",
  //   "AMD Radeon RX 6800 XT 16GB",
  //   "AMD Radeon RX 7900 XTX 24GB",
  // ];

  return (
    <div className="relative p-5 space-y-3">
      {/* Navbar */}
      <div className="gap-4 border-2 border-dashed border-gray-400 p-4 rounded-lg w-full">
        <div className="text-black text-3xl font-bold">Customize your PC</div>

        {/* System Cost Card at the Top-Right */}
        <div className="absolute top-0 right-0 mt-4 mr-4 z-10">
          <SystemCostCard price="1,500,950" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex gap-8 items-center">
          <div className="bg-black rounded-full text-white w-[80px] h-[80px] flex justify-center items-center">
            <p className="text-[30px]">
              <strong>1</strong>
            </p>
          </div>
          <p className="text-[40px]">System core</p>
        </div>
      </div>

      {/* Platform Selection */}
      <div className="flex gap-60 text-black items-center ml-8 justify-between w-[920px]">
        <p>Platform</p>
        <p>
          <strong>Intel Core B760M D5 Mid Tower </strong>
        </p>
      </div>
      <div className="flex gap-60 text-black items-center ml-8 justify-between w-[940px]">
        <p>Motherboard</p>
        <p className="ml">
          <strong>B760M Wi-Fi D5 (Intel B760 MATX) </strong>
        </p>
      </div>

      {/* CPU Selection */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg w-[1200px]">
        <span className="text-sm font-medium ml-5">CPU</span>
        <div className="relative border border-black rounded-lg flex items-center px-3">
          <select
            className="text-black text-sm px-4 py-2 pr-8 rounded-lg outline-none cursor-pointer appearance-none bg-white w-full border-none"
            value={selectedCPU}
            onChange={(e) => setSelectedCPU(e.target.value)}
            onFocus={() => setIsOpenCPU(true)}
            onBlur={() => setIsOpenCPU(false)}
            onClick={() => setIsOpenCPU(!isOpenCPU)}
          >
            
            {cpuOptions.map((cpu, index) => (
              <option key={index} value={cpu} className="text-black">
                {cpu}
              </option>
            ))}
          </select>

          {/* Dropdown Icon */}
          <div className="absolute right-3 pointer-events-none">
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                isOpenCPU ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* RAM Selection */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg w-[1200px]">
        <span className="text-sm font-medium ml-5">RAM</span>
        <div className="relative border border-black rounded-lg flex items-center px-3 w-[480px]">
          <select
            className="text-black text-sm px-4 py-2 pr-8 rounded-lg outline-none cursor-pointer appearance-none bg-white w-full border-none"
            value={selectedRAM}
            onChange={(e) => setSelectedRAM(e.target.value)}
            onFocus={() => setIsOpenRAM(true)}
            onBlur={() => setIsOpenRAM(false)}
            onClick={() => setIsOpenRAM(!isOpenRAM)}
          >
            {ramOptions.map((ram, index) => (
              <option key={index} value={ram} className="text-black">
                {ram}
              </option>
            ))}
          </select>

          {/* Dropdown Icon */}
          <div className="absolute right-3 pointer-events-none">
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                isOpenRAM ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-60 text-black items-center ml-8 justify-between w-[920px]">
        <p>Networking</p>
        <p className="mr-32">
          <strong>Integrated Wi-Fi </strong>
        </p>
      </div>
      <Storage  primaryStorageOptions={primaryStorageOptions}/>
      <CasingAndCooling />
      <Software />
      <Accessories />
      <CourtesyInstall />
      <AdditionalComments />
      <Features />
    </div>
  );
};

export default PCBuilder;
