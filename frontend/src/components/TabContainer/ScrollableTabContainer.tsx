import SimpleBar from "simplebar-react";
import { ScrollableTabContainerProps } from "./types";
import { cn } from "@/lib";

export const ScrollableTabContainer: React.FC<ScrollableTabContainerProps> = ({
  isScrollbarVisible,
  isShadowVisible,
  children,
}) => {
  return (
    <SimpleBar
      id='scroll-container'
      className={cn(
        "w-full min-w-full",
        isShadowVisible &&
          "before:absolute before:bottom-2.5 before:left-0 before:top-0 before:z-10 before:w-5 before:bg-gradient-to-l before:from-transparent before:to-white",
        isScrollbarVisible && "pb-[var(--horizontal-scrollbar-height)]",
      )}
      autoHide={false}
    >
      <div className='flex'>{children}</div>
    </SimpleBar>
  );
};
