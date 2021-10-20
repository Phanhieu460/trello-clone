import React, { useState } from "react";
import "./App.css";
import InputTask from "./Components/InputTask";
import List from "./Components/List";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <List title={"TO DO"} />
      <List title={"IN PROGRESS"} />
      <List title={"DONE"} />
    </div>
  );
}

export default App;
