import { useHiddenTabs } from "@/hooks";
import { HiddenTabsContext } from "@/contexts";
import { HiddenTabsProviderProps } from "./types";

export const HiddenTabsProvider: React.FC<HiddenTabsProviderProps> = ({ children }) => {
  const hiddenTabs = useHiddenTabs();
  return <HiddenTabsContext.Provider value={hiddenTabs}>{children}</HiddenTabsContext.Provider>;
};
