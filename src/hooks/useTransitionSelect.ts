'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export const useTransitionSelect = () => {
    //  const dispatch = useDispatch();
     const pathname = usePathname();
    //  const previousPath = useSelector((state) => state.path.previousPath);

     const [previousPath, setPreviousPath] = useState("");
  useEffect(() => {
    const storedPath = sessionStorage.getItem("path") || "";
    setPreviousPath(storedPath);

    sessionStorage.setItem("path", pathname);
  }, [pathname]);

  const previousPage = previousPath;
  const currentPage = pathname;

//   if (currentPage === "/application/value") {
//     return "right";
//   }
//   if (currentPage === "/application/life") {
//     if (previousPage === "/application/value") return "";
//     return "right";
//   }
//     if (previousPage === "/application/value") {
//       if (currentPage === "/application/life") return "";
//       return "right";
//     }
//         if (previousPage === "/application/life") {
//           if (currentPage === "/application/character") return "";
//           return "right";
//         }
  return "right";
};