import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SelectedTabContext } from "@/contexts";
import { SelectedTabProviderProps } from "./types";

export const SelectedTabProvider: React.FC<SelectedTabProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const tabId = location.pathname.replace(/\//g, "");
  const [selectedTabId, setSelectedTabId] = useState<string | null>(tabId);
  useEffect(() => {
    navigate(`/${selectedTabId}`);
  }, [selectedTabId]);
  return (
    <SelectedTabContext.Provider value={{ selectedTabId, setSelectedTabId }}>
      {children}
    </SelectedTabContext.Provider>
  );
};
