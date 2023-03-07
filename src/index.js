
import { createRoot } from "react-dom/client";

import { App } from "./App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App /> ,rootElement);

