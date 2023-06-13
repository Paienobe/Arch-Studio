"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import data from "@/data/data.json";
import { SiteData } from "@/types/types";

type ContextType = {
  siteData: SiteData;
  setSiteData: React.Dispatch<React.SetStateAction<SiteData>>;
};
type Props = { children: ReactNode };

const AppContext = createContext<ContextType | null>(null);

export const AppProvider = ({ children }: Props) => {
  const [siteData, setSiteData] = useState<SiteData>(data);
  return (
    <AppContext.Provider value={{ siteData, setSiteData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
