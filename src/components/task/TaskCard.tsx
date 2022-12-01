import React from "react";
import styled from "styled-components";
import TaskDeleteButton from "../atoms/button/TaskDeleteButton";
import TaskInput from "../atoms/input/TaskInput";
import TaskCardTitle from "./card/TaskCardTitle";
import Tasks from "./card/Tasks";

const TaskCard = () => {
  return (
    <STaskCard>
      <TaskCardTitle />
      <TaskDeleteButton />
      <Tasks />
      <TaskInput />
    </STaskCard>
  );
};

const STaskCard = styled.div`
  width: 400px;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 20px 20px 26px;
`;

export default TaskCard;
