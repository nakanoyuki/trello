import React, { FC } from "react";

type Task = {
  text: string;
};

const Tasks: FC = ({ inputText, taskList }) => {
  return (
    <div>
      {taskList.map((task: Task) => (
        <p>{task.text}</p>
      ))}
    </div>
  );
};

export default Tasks;
