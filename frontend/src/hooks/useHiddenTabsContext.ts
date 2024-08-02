import { useContext } from "react";
import { HiddenTabsContext } from "@/contexts";

export const useHiddenTabsContext = () => {
  return useContext(HiddenTabsContext);
};
