import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/atoms/layout/Header";
import TaskCards from "./components/task/TaskCards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
