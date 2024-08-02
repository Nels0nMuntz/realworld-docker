import { useTabs } from "@/hooks";
import { TabsContext } from "@/contexts";
import { TabsProviderProps } from "./types";

export const TabsProvider: React.FC<TabsProviderProps> = ({ children }) => {
  const tabs = useTabs();
  return <TabsContext.Provider value={tabs}>{children}</TabsContext.Provider>;
};
