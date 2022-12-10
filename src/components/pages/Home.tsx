import React from "react";
import Header from "../atoms/layout/Header";
import TaskCards from "../task/TaskCards";

const Home = () => {
  return (
    <div>
      <Header />
      <TaskCards />
    </div>
  );
};

export default Home;
