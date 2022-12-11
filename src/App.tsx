import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/organisms/layout/Header";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import TaskCards from "./components/task/TaskCards";
import Router from "./router/Router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
