import { useState } from "react";
import { Icon } from "@/components/Icon/Icon";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib";
import { TabDropdownItemProps } from "./types";
import { useSelectedTabContext } from "@/hooks";

export const TabDropdownItem: React.FC<TabDropdownItemProps> = ({ tab, onClose }) => {
  const { id, title, icon } = tab;
  const [highlighted, setHighlighted] = useState(false);
  const { selectedTabId, setSelectedTabId } = useSelectedTabContext();
  const isSelected = selectedTabId === id;
  const handleMouseEnter = () => setHighlighted(true);
  const handleMouseLeave = () => setHighlighted(false);
  const handleSelectTab = () => setSelectedTabId(id);
  const handleCloseTab = () => onClose(id);
  return (
    <DropdownMenuItem
      key={id}
      className='bg-white p-0 hover:text-grays-dark'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      asChild
    >
      <div>
        <button
          className={cn(
            "flex h-auto w-full items-center gap-x-2.5 bg-white p-[15px] pr-10 text-grays hover:bg-white",
            (highlighted || isSelected) && "bg-white text-grays-dark",
          )}
          onClick={handleSelectTab}
        >
          <Icon
            name={icon}
            className='pointer-events-none flex-shrink-0 transition-colors duration-100'
          />
          <span className='pointer-events-none flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-left leading-4 transition-colors duration-100'>
            {title}
          </span>
        </button>
        <Button
          variant='link'
          size='icon'
          className='absolute right-[15px] top-1/2 h-auto w-auto flex-shrink-0 -translate-y-1/2 text-grays transition-colors duration-100 hover:text-red'
          onClick={handleCloseTab}
        >
          <Icon name='close' className='pointer-events-none' />
          <span className='sr-only'>close tab</span>
        </Button>
      </div>
    </DropdownMenuItem>
  );
};
