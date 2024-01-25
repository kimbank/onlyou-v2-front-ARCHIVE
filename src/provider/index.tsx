"use client"

import SWRProvider from "./swr";
import MuiProvider from "./mui";
import ReduxProvider from "./redux";

import HomeProvider from "./home";


export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Mui Provider */}
      <MuiProvider>
        {/* Redux Provider */}
        <ReduxProvider>
          {/* SWR Provider */}
          <SWRProvider>
            {children}
            <HomeProvider />
          </SWRProvider>
        </ReduxProvider>
      </MuiProvider>
    </>
  );
}
