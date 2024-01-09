import React from "react";

type DrawerContent = {
  children: React.ReactNode;
};

const DrawerButton = ({ children }: DrawerContent) => {
  return <div style={{ width: "100%" }}>{children}</div>;
};

export default DrawerButton;
