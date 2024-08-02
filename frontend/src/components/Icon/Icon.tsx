import { ICONS } from "@/constants";
import { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  return ICONS[name](props);
};
