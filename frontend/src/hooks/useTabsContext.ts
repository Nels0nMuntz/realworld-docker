import { TabsContext } from "@/contexts";
import { useContext } from "react";

export const useTabsContext = () => {
  return useContext(TabsContext);
};
