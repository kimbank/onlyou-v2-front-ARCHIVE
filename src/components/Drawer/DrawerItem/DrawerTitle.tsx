import React from "react";

type DrawerTitleType = {
  children: React.ReactNode;
};

const DrawerTitle = ({ children }: DrawerTitleType) => {
  return <div>{children}</div>;
};

export default DrawerTitle;
