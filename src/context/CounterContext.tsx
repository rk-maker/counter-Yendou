import React, { createContext, useContext, useState, ReactNode } from "react";
interface CounterContextType {
  count: number;
  increment: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error(
      "CounterProvider should be wrapped arround while using the context"
    );
  }
  return context;
};
