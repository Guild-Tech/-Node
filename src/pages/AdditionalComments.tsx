import { useState } from "react";

const AdditionalComments = () => {
  const [comment, setComment] = useState("");
  return (
    <div className="p-5 space-y-4">
      <div className="flex gap-8 items-center">
        <div className="bg-black rounded-full text-white w-[80px] h-[80px] flex justify-center items-center  ">
          <p className="text-[30px]">
            <strong>7</strong>
          </p>
        </div>
        <p className="text-[40px]">Additional Questions and/or Comments</p>
      </div>
      <div className="border border-black rounded-lg p-4 w-[1200px] ">
        <input
          type="text"
          placeholder="Kindly drop any questions or comments about your needs here."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 outline-none border-none"
        />
      </div>
    </div>
  );
};

export default AdditionalComments;
