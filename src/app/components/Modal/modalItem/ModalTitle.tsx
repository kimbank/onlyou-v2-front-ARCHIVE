import React from "react";

type ModalTitleType = {
  children: React.ReactNode;
};

const ModalTitle = ({ children }: ModalTitleType) => {
  return <div>{children}</div>;
};

export default ModalTitle;
