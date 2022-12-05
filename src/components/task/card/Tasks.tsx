import React, { FC } from "react";
import styled from "styled-components";
import { TaskType } from "../../../type/task";
import Task from "../card/Task";

export type TasksProps = {
  taskList: TaskType[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

// function Tasks(props: TasksProps) {
// const Tasks = ( props:TasksProps ) => {
const Tasks: FC<TasksProps> = ({ taskList, setTaskList }) => {
  return (
    <STaskCards>
      {taskList.map((task, i) => (
        <Task
          key={`${task.text + i}`}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ))}
    </STaskCards>
  );
};

const STaskCards = styled.ul`
  padding: 0;
`;

export default Tasks;
