import React from "react";

interface ShippingAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
}

const ShippingAddressModal: React.FC<ShippingAddressModalProps> = ({
  isOpen,
  onClose,
  onProceed,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-[500px]">
        <div className="flex justify-center">
          <button
            onClick={onProceed}
            className="bg-[#FF3B3B] w-[250px] h-[50px] rounded-[20px] text-white"
          >
            Add a shipping address
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-[#FF3B3B] rounded-full w-[30px] h-[30px]"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ShippingAddressModal;
