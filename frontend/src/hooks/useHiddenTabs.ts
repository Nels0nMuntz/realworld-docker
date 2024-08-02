import { Tab } from "@/components";
import { useMemo, useState } from "react";

export const useHiddenTabs = () => {
  const [hiddenTabs, setHiddenTabs] = useState<{ tab: Tab; index: number }[]>([]);
  const [isFirstTabHidden, setIsFirstTabHidden] = useState(false);
  const onChangeTabVisibility = (tab: Tab, index: number, isVisible: boolean) => {
    if (isVisible) {
      setHiddenTabs((items) => items.filter((item) => item.tab.id !== tab.id));
    } else {
      setHiddenTabs((tabs) => [...tabs, { tab, index }].sort((a, b) => a.index - b.index));
    }
    if (index === 0) {
      setIsFirstTabHidden(!isVisible);
    }
  };
  const closeHiddenTab = (id: string) => {
    setHiddenTabs((items) => items.filter((item) => item.tab.id !== id));
  };
  const tabs = useMemo(() => hiddenTabs.map((item) => item.tab), [hiddenTabs]);

  return { hiddenTabs: tabs, isFirstTabHidden, onChangeTabVisibility, closeHiddenTab };
};
