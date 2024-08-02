import { Tab } from "@/components/Tab/types";

export interface TabDropdownItemProps {
  tab: Tab;
  onClose: (id: string) => void;
}
