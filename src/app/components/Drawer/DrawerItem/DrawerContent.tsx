import React from "react";

type DrawerContent = {
  children: React.ReactNode;
};

const DrawerContent = ({ children }: DrawerContent) => {
  return <div>{children}</div>;
};

export default DrawerContent;
