import { HiddenTabsProvider } from "../HiddenTabsProvider/HiddenTabsProvider";
import { SelectedTabProvider } from "../SelectedTabProvider/SelectedTabProvider";
import { TabsProvider } from "../TabsProvider/TabsProvider";
import { RootProviderProps } from "./types";

export const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <TabsProvider>
      <HiddenTabsProvider>
        <SelectedTabProvider>{children}</SelectedTabProvider>
      </HiddenTabsProvider>
    </TabsProvider>
  );
};
