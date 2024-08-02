import { IconName } from "../Icon/types";

export type UniqueId = string;

export interface Tab {
  id: UniqueId;
  title: string;
  icon: IconName;
}

export interface TabProps extends Tab {
  active?: boolean;
  pinned?: boolean;
  selected?: boolean;
  dragging?: boolean;
  index?: number;
  onSelect?: (id: string) => void;
  onClose?: (id: string) => void;
  onPin?: (id: string) => void;
  onUnpin?: (id: string) => void;
}
