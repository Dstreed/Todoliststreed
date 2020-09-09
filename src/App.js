import React from "react";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="container my-4">
      <header className="App-header">
        <h1 className="text-center">Todos App</h1>

        <Todos />
      </header>
    </div>
  );
}

export default App;
