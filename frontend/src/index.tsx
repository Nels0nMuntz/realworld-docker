import { createRoot } from "react-dom/client";
import { Rotes } from "@/routes";
import "./index.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("root not found");
}
const container = createRoot(root);

container.render(<Rotes />);
