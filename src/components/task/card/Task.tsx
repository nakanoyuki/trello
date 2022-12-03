import { FC, ReactNode } from "react";
import { TaskType } from "../../../type/task";

// const Task: FC<TaskType> = (props) => {
const Task: FC<{ task: TaskType }> = ({ task }) => {
  return <div>{task.text}</div>;
};

export default Task;
