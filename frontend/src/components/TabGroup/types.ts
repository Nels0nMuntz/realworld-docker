import type { Tab } from "../Tab/types";

export interface TabGroupProps {
  items: Tab[];
  pinned?: boolean;
  index?: number;
  onMoveTab: (activeIndex: number, overIndex: number) => void;
  onPin?: (id: string) => void;
  onUnpin?: (id: string) => void;
  onCloseTab?: (id: string) => void;
}
