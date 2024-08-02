import { cn } from "@/lib";
import { StickyTabContainerProps } from "./types";

export const StickyTabContainer: React.FC<StickyTabContainerProps> = ({
  isScrollbarVisible,
  children,
}) => {
  return (
    <div className={cn("sticky left-0 top-0 z-10")}>
      <div
        className={cn(
          "relative flex",
          isScrollbarVisible && "mb-[8px] border-b border-solid border-grays-muted",
        )}
      >
        {children}
      </div>
    </div>
  );
};
