import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "../Icon/Icon";
import { TabProps } from "./types";
import { Button } from "../ui/button";
import { TabTooltip } from "../TabTooltip/TabTooltip";
import { useEffect, useRef, useState } from "react";
import { useElementVisibility } from "@/hooks/useElementVisibility";
import { cn } from "@/lib";
import { useHiddenTabsContext } from "@/hooks";

export const Tab: React.FC<TabProps> = ({
  id,
  title,
  icon,
  active,
  pinned,
  selected,
  dragging,
  index,
  onSelect,
  onClose,
}) => {
  const tabRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useElementVisibility(tabRef.current);
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const [accented, setAccented] = useState(false);
  const { onChangeTabVisibility } = useHiddenTabsContext();
  useEffect(() => {
    if (onChangeTabVisibility && !pinned && !dragging) {
      onChangeTabVisibility({ id, icon, title }, index, isVisible);
    }
  }, [isVisible, pinned, dragging]);

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  const handleClickTab = () => onSelect(id);
  const handleClose = () => onClose(id);
  const handleMouseEnter = () => setAccented(true);
  const handleMouseLeave = () => setAccented(false);
  const handleFocus = () => setAccented(true);
  const handleBlur = () => setAccented(false);
  const tab = (
    <span className='group/tab relative' ref={tabRef}>
      <span
        {...attributes}
        {...listeners}
        ref={setNodeRef}
        style={style}
        id={`${id}-tab`}
        role='tab'
        aria-selected={selected ? "true" : "false"}
        aria-controls={`${id}-tabpanel`}
        tabIndex={0}
        className={cn(
          "relative flex h-12 flex-shrink-0 origin-center cursor-pointer select-none items-center gap-x-2.5 whitespace-nowrap px-5 py-4 leading-4 text-grays transition-colors duration-150 before:absolute before:left-0 before:top-0 before:h-[2px] before:w-full before:rounded-[2px_2px_0_0] before:transition-colors  before:duration-150  before:content-[''] after:absolute after:left-0 after:top-1/2 after:h-4 after:w-px after:-translate-y-1/2 focus-visible:bg-blue-light focus-visible:text-grays-dark focus-visible:outline-none",
          selected && "bg-blue-light text-grays-dark after:bg-blue-light",
          selected && !pinned && !active && "before:bg-blue",
          selected && pinned && !active && "before:bg-grays",
          !selected && !active && "bg-off-white  after:bg-grays-muted",
          pinned && "after:hidden",
          !pinned && "group-hover/tab:pr-2.5",
          active && "bg-blue-light text-grays-dark after:bg-blue-light",
          dragging &&
            "relative z-10 cursor-grabbing bg-grays text-white before:hidden hover:bg-grays hover:text-white",
          accented && "bg-blue-light text-grays-dark after:hidden",
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClickTab}
      >
        <Icon name={icon} className='pointer-events-none h-4 w-4 flex-shrink-0' />
        {!pinned ? (
          <span
            className={cn(
              !dragging &&
                "pointer-events-none overflow-hidden text-ellipsis group-hover/tab:max-w-[calc(100%-40px)] group-hover/tab:pr-[10px]",
            )}
          >
            {title}
          </span>
        ) : null}
      </span>
      {!pinned && (
        <Button
          variant='link'
          size='icon'
          className={cn(
            "absolute right-2.5 top-1/2 z-[1] h-auto w-auto flex-shrink-0 -translate-y-1/2 text-red opacity-0 group-hover/tab:opacity-100",
          )}
          onClick={handleClose}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icon name='close' className='pointer-events-none' />
          <span className='sr-only'>close tab</span>
        </Button>
      )}
    </span>
  );
  const tooltipContent = (
    <div className='flex items-center gap-x-2.5 text-sm leading-4 text-grays-dark'>
      <Icon name={icon} className='h-4 w-4 flex-shrink-0' />
      {title}
    </div>
  );
  return pinned && !dragging ? <TabTooltip content={tooltipContent}>{tab}</TabTooltip> : tab;
};
