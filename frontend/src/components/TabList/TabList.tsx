import { useRef } from "react";
import { useHiddenTabsContext, useSelectedTabContext, useTabsContext } from "@/hooks";
import { TabGroup } from "../TabGroup/TabGroup";
import { TabDropdown } from "../TabDropdown/TabDropdown";
import { StickyTabContainer } from "../TabContainer/StickyTabContainer";
import { ScrollableTabContainer } from "../TabContainer/ScrollableTabContainer";

export const TabList: React.FC = () => {
  const { selectedTabId, setSelectedTabId } = useSelectedTabContext();
  const { pinnedTabs, unpinnedTabs, movePinnedTab, moveUnpinnedTab, pinTab, unpinTab, closeTab } =
    useTabsContext();
  const { hiddenTabs, isFirstTabHidden, closeHiddenTab } = useHiddenTabsContext();
  const isScrollbarVisible = Boolean(hiddenTabs.length);
  const getTabIndex = (id: string) => unpinnedTabs.findIndex((tab) => tab.id === id);

  const tablistRef = useRef<HTMLDivElement | null>(null);
  const handleCloseTab = (id: string) => {
    if (id === selectedTabId) {
      const currentTabIndex = getTabIndex(id);
      const nextUnpinnedTab = unpinnedTabs[currentTabIndex + 1];
      const prevUnpinnedTab = unpinnedTabs[currentTabIndex - 1];
      const pinnedTab = pinnedTabs[pinnedTabs.length - 1];
      if (nextUnpinnedTab) {
        setSelectedTabId(nextUnpinnedTab.id);
      } else if (prevUnpinnedTab) {
        setSelectedTabId(prevUnpinnedTab.id);
      } else if (pinnedTab) {
        setSelectedTabId(pinnedTab.id);
      } else {
        setSelectedTabId("");
      }
    }
    closeHiddenTab(id);
    closeTab(id);
  };

  return (
    <div ref={tablistRef}>
      <div
        className='relative grid w-full grid-cols-[auto,1fr] border-t border-solid border-grays-muted bg-off-white'
        role='tablist'
      >
        <StickyTabContainer isScrollbarVisible={isScrollbarVisible}>
          <TabGroup items={pinnedTabs} onMoveTab={movePinnedTab} onUnpin={unpinTab} pinned />
        </StickyTabContainer>
        <ScrollableTabContainer
          isScrollbarVisible={isScrollbarVisible}
          isShadowVisible={isFirstTabHidden}
        >
          <div className='flex w-full flex-nowrap'>
            <TabGroup
              items={unpinnedTabs}
              onMoveTab={moveUnpinnedTab}
              onCloseTab={handleCloseTab}
              onPin={pinTab}
            />
          </div>
          {Boolean(hiddenTabs.length) && (
            <TabDropdown items={hiddenTabs} onClose={handleCloseTab} />
          )}
        </ScrollableTabContainer>
      </div>
    </div>
  );
};
