import { createContext } from "react";
import { HiddenTabsContextProps } from "./types";

export const HiddenTabsContext = createContext<HiddenTabsContextProps | null>(null);
