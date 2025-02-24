import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Software = () => {
  const [selectedOS, setSelectedOS] = useState("Windows 11 Pro 64-bit");
  const [isOpenOS, setIsOpenOS] = useState(false);

  const osOptions = [
    "Windows 11 Pro 64-bit",
    "Windows 10 Pro 64-bit",
    "Ubuntu 22.04 LTS",
    "macOS Ventura",
  ];

  return (
    <div className="p-6 space-y-3">
      <div className="flex gap-8 items-center">
        <div className="bg-black rounded-full text-white w-[80px] h-[80px] flex justify-center items-center">
          <p className="text-[30px]">
            <strong>4</strong>
          </p>
        </div>
        <p className="text-[40px]">Software</p>
      </div>

      {/* OS Selection */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg w-full max-w-[1200px]">
        <span className="text-sm font-medium ml-5">Operating System</span>
        <div className="relative border border-black rounded-lg flex items-center px-3  max-w-[800px]">
          <select
            className="text-black text-sm px-4 py-2 pr-8 rounded-lg outline-none cursor-pointer appearance-none bg-white w-[480px] border-none"
            value={selectedOS}
            onChange={(e) => setSelectedOS(e.target.value)}
            onFocus={() => setIsOpenOS(true)}
            onBlur={() => setIsOpenOS(false)}
            onClick={() => setIsOpenOS(!isOpenOS)}
          >
            {osOptions.map((os, index) => (
              <option key={index} value={os} className="text-black">
                {os}
              </option>
            ))}
          </select>

          {/* Dropdown Icon */}
          <div className="absolute right-3 pointer-events-none">
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                isOpenOS ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
