import SWRProvider from "./swr";
import MuiProvider from "./mui";
import ReduxProvider from "./redux";


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
          </SWRProvider>
        </ReduxProvider>
      </MuiProvider>
    </>
  );
}
