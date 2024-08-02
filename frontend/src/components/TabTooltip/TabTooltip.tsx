import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { TabTooltipProps } from "./types";

export const TabTooltip: React.FC<TabTooltipProps> = ({ content, children }) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side='bottom'
          sideOffset={10}
          className='border border-solid border-grays-muted p-3.5 shadow-popup'
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
