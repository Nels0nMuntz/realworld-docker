import { ICONS, IconsProps } from "@/constants";

export type IconName = keyof typeof ICONS;

export interface IconProps extends IconsProps {
  name: IconName;
}
