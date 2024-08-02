import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Icon } from "../Icon/Icon";
import { TabDropdownProps } from "./types";
import { TabDropdownItem } from "./TabDropdownItem/TabDropdownItem";
import { cn } from "@/lib";

export const TabDropdown: React.FC<TabDropdownProps> = ({ items, onClose }) => {
  const [open, setOpen] = useState(false);
  const handleChangeOpen = (open: boolean) => setOpen(open);
  return (
    <DropdownMenu onOpenChange={handleChangeOpen}>
      <DropdownMenuTrigger asChild>
        <div className='sticky right-0 top-0 z-10'>
          <Button
            className={cn(
              "flex h-12 w-9 flex-shrink-0 items-center justify-center rounded-none bg-white transition-colors duration-100 before:absolute before:-left-5 before:top-0 before:z-10 before:h-full before:w-5 before:bg-gradient-to-r before:from-transparent before:to-white hover:bg-white",
              open && "bg-blue text-white",
            )}
            variant='secondary'
          >
            <span className='flex-shrink-0'>
              <Icon name='chevronDown' className={open ? "rotate-180" : ""} />
            </span>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className='w-[225px] rounded-bl border border-snowbank bg-white p-0 shadow-popup'>
          {items.map((tab) => (
            <TabDropdownItem key={tab.id} tab={tab} onClose={onClose} />
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
