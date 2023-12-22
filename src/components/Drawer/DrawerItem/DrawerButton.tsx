import React from "react";

type DrawerContent = {
  children: React.ReactNode;
};

const DrawerButton = ({ children }: DrawerContent) => {
  return <div>{children}</div>;
};

export default DrawerButton;
