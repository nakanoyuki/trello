import { FC, ReactNode } from "react";
import styled from "styled-components";
import { TaskType } from "../../../type/task";

// const Task: FC<TaskType> = (props) => {
const Task: FC<{ task: TaskType }> = ({ task }) => {
  return <STaskCard>{task.text}</STaskCard>;
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
