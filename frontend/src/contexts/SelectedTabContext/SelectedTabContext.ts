import { createContext } from "react";
import { SelectedTabContextState } from "./types";

export const SelectedTabContext = createContext<SelectedTabContextState | null>(null);
