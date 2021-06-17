import { sidebarStateInit, sidebarReducer } from "../reducer/sidebarReducer";
import React, { useReducer, createContext, useContext } from "react";
import { ISidebarContext } from "../../../@interface/Context/sidebar";

const SidebarStateContext = createContext<ISidebarContext>({
  sidebarState: sidebarStateInit,
  sidebarUpdateDispatch: () => null,
});

export function GetSidebarStateContext(): ISidebarContext {
  const context = useContext(SidebarStateContext);
  if (context === undefined) {
    throw new Error("SidebarStateContext not found");
  }
  return context;
}

// Provider
export const SidebarStateProvider: React.FC = ({ children }) => {
  const [sidebarState, sidebarUpdateDispatch] = useReducer(
    sidebarReducer,
    sidebarStateInit
  );
  return (
    <SidebarStateContext.Provider
      value={{ sidebarState, sidebarUpdateDispatch }}
    >
      {children}
    </SidebarStateContext.Provider>
  );
};
