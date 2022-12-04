import React, { FC } from "react";
import styled from "styled-components";
import { TaskType } from "../../../type/task";
import Task from "../card/Task";

type TasksProps = {
  taskList: TaskType[];
};

// function Tasks(props: TasksProps) {
// const Tasks = ( props:TasksProps ) => {
const Tasks: FC<TasksProps> = ({ taskList, setTaskList }) => {
  return (
    <STaskCards>
      {taskList.map((task) => (
        <Task task={task} taskList={taskList} setTaskList={setTaskList} />
      ))}
    </STaskCards>
  );
};

const STaskCards = styled.ul`
  padding: 0;
`;

export default Tasks;
