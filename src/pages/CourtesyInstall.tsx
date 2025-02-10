import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CourtesyInstall = () => {
  const [selectedOption, setSelectedOption] = useState("None.");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["None.", "Microsoft Office 2021", "LibreOffice"];

  return (
    <div className="p-6 space-y-4">
      <div className="flex gap-8 items-center">
        <div className="bg-black rounded-full text-white w-[80px] h-[80px] flex justify-center items-center">
          <p className="text-[30px]">
            <strong>6</strong>
          </p>
        </div>
        <p className="text-[40px]">Courtesy Install</p>
      </div>

      {/* Word Processing */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg  w-[1200px]">
        <span className="text-sm font-medium ml-5">Word Processing</span>
        <div className="relative border border-black rounded-lg flex items-center px-3 ">
          <select
            className="text-black text-sm px-4 py-2 pr-8 rounded-lg outline-none cursor-pointer appearance-none bg-white w-[480px] border-none"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(!isOpen)}
          >
            {options.map((option, index) => (
              <option key={index} value={option} className="text-black">
                {option}
              </option>
            ))}
          </select>
          <div className="absolute right-3 pointer-events-none">
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtesyInstall;
