import { SelectedTabContext } from "@/contexts";
import { useContext } from "react";

export const useSelectedTabContext = () => {
  return useContext(SelectedTabContext);
};
