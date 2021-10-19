import React from "react";
import "./App.css";
import List from "./Components/List";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <List title={"TO DO"} />
      <List title={"IN PROGRESS"} />
    </div>
  );
}

export default App;
