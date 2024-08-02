import { createContext } from "react";
import { TabsContextState } from "./types";

export const TabsContext = createContext<TabsContextState | null>(null);
