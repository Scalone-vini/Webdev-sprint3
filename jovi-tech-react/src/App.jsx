import { useState } from "react";
import Header from "./components/Header";

function App() {
  function handleExplorar() {
    alert("em breve...");
  }

  function handleAbrirLogin() {
    alert("em breve...");
  }

  return (
    <div>
      <Header onExplorar={handleExplorar} onAbrirLogin={handleAbrirLogin} />
    </div>
  );
}

export default App;