import React from "react";

export const Counter = () => {
  const handleIncrement = () => {};
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "18px",
      }}
    >
      <span>Current Count </span>

      <button
        style={{
          padding: "6px 12px",
          backgroundColor: "#grey",
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
