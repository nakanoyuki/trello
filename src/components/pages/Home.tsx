import React, { memo } from "react";
import Header from "../atoms/layout/Header";
import TaskCards from "../task/TaskCards";

const Home = memo(() => {
  return (
    <div>
      <Header />
      <TaskCards />
    </div>
  );
});

export default Home;
