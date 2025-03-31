import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface HistoryContextType {
  history: string[];
  addQueryToHistory: (query: string) => void;
  clearHistory: () => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export function HistoryProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("queryHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  const addQueryToHistory = (query: string) => {
    if (!query.trim()) return;

    const updatedHistory = [query, ...history];
    setHistory(updatedHistory);
    localStorage.setItem("queryHistory", JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("queryHistory");
    alert("Cleared Histroy!!")
  };

  return (
    <HistoryContext.Provider value={{ history, addQueryToHistory, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error("useHistory must be used within a HistoryProvider");
  }
  return context;
}
