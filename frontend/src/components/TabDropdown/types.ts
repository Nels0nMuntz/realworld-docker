import { Tab } from "../Tab/types";

export interface TabDropdownProps {
  items: Tab[];
  onClose: (id: string) => void;
}
