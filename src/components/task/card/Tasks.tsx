import React, { FC } from "react";
import { Task } from "../../../type/task";

const Tasks = ({ taskList }: { taskList: Task[] }) => {
  return (
    <div>
      {taskList.map((task) => (
        <p>{task.text}</p>
      ))}
    </div>
  );
};

export default Tasks;
