import React from "react";
import logo from "./logo.svg";
import { Counter } from "./components/counter/counter";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { CounterProvider } from "./context/CounterContext";
function App() {
  return (
    <div className="App">
      <ChakraBaseProvider>
        <CounterProvider>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Counter />
          </div>
        </CounterProvider>
      </ChakraBaseProvider>
    </div>
  );
}

export default App;
