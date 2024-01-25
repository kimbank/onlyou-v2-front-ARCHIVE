"use client"

import SWRProvider from "./swr";
import MuiProvider from "./mui";
import ReduxProvider from "./redux";
import { usePathname, useRouter } from "next/navigation";
import { useTransitionSelect } from "@/hooks/useTransitionSelect";


export default function Provider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const transition = useTransitionSelect();
  
  return (
    <>
      {/* Mui Provider */}
      <MuiProvider>
        {/* Redux Provider */}
        <ReduxProvider>
          {/* SWR Provider */}
          <SWRProvider>
            {children}
          </SWRProvider>
        </ReduxProvider>
      </MuiProvider>
    </>
  );
}
