import React from "react";

type ModalContent = {
  children: React.ReactNode;
};

const ModalButton = ({ children }: ModalContent) => {
  return <div>{children}</div>;
};

export default ModalButton;
