import React from "react";
import logo from "./logo.svg";
import { Counter } from "./components/counter/counter";
import { ChakraBaseProvider } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <ChakraBaseProvider>
        <Counter />
      </ChakraBaseProvider>
    </div>
  );
}

export default App;
