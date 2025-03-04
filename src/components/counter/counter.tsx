import React from "react";
import { useCustomToast } from "../toast/toast";
import { useCounter } from "../../context/CounterContext";

export const Counter = () => {
  const customToast = useCustomToast();
  const { count, increment } = useCounter();

  const handleIncrement = () => {
    increment();
    customToast({
      heading: "Counter Updated",
      text: `Current count: ${count + 1}`,
    });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "18px",
      }}
    >
      <span>Current Count {count}</span>

      <button
        style={{
          padding: "6px 12px",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          fontWeight: "600",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleIncrement}
      >
        +1
      </button>
    </div>
  );
};
