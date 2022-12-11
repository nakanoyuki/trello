import { memo } from "react";
import TaskCards from "../task/TaskCards";

const Home = memo(() => {
  return (
    <div>
      <TaskCards />
    </div>
  );
});

export default Home;
