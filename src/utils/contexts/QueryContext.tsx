import { createContext, useContext, useState, ReactNode } from "react";

interface queryContextType {
  query: string;
  setQuery: (query: string) => void;
}

const QueryContext = createContext<queryContextType | undefined>(undefined);

export function QueryProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState<string>(`\n-- Type Your Query Here\n\nSELECT * FROM Users\nWHERE name=Utkarsh;`);

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
}

export function useQuery() {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("useQuery must be used within a QueryProvider");
  }
  return context;
}
