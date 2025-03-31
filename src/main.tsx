import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryProvider } from "./utils/contexts/QueryContext.tsx";
import { HistoryProvider } from "./utils/contexts/HistoryContext.tsx";

createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <HistoryProvider>
      <App />
    </HistoryProvider>
  </QueryProvider>
);
