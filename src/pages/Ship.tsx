import React, { useState } from "react";
import ShippingAddressModal from "./ShippingAddressModal";
import ShippingInformationModal from "./ShippingInformationModal ";

interface ShippingModalsProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}

const ShippingModals: React.FC<ShippingModalsProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && (
        <ShippingAddressModal
          isOpen={isOpen}
          onClose={onClose}
          onProceed={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <ShippingInformationModal
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default ShippingModals;
