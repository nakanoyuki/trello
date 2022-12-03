import React, { FC } from "react";
import { TaskType } from "../../../type/task";
import Task from "../card/Task";

type TasksProps = {
  taskList: TaskType[];
};

// function Tasks(props: TasksProps) {
// const Tasks = ( props:TasksProps ) => {
const Tasks: FC<TasksProps> = ({ taskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
};
// const Tasks: FC<TasksProps> = ({ taskList }) => {
//   return (
//     <div>
//       {taskList.map((task) => (
//         <Task task={task} />
//       ))}
//     </div>
//   );
// };

export default Tasks;
