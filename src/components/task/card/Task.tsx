import { FC, ReactNode } from "react";
import styled from "styled-components";
import { TaskType } from "../../../type/task";
import { TasksProps } from "./Tasks";

// type TaskProps = {
//   task: TaskType;
//   taskList: TasksProps["taskList"];
//   setTaskList: TasksProps["setTaskList"];
// };

type TaskProps = {
  task: TaskType;
} & TasksProps;

const Task: FC<TaskProps> = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <>
      <STaskCard>
        <p>{task.text}</p>

        <button
          onClick={() => {
            handleDelete(task.id);
          }}
        >
          ✖️
        </button>
      </STaskCard>
    </>
  );
};

const STaskCard = styled.li`
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  list-style-type: none;
  margin: 0 auto 20px;
  box-shadow: 2px 6px 8px 0px rgb(0 0 0 / 10%);
`;

export default Task;
