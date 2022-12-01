import React from "react";
import styled from "styled-components";
import AddTaskButton from "../atoms/button/AddTaskButton";
import TaskCard from "./TaskCard";

const TaskCards = () => {
  return (
    <STaskCard>
      <TaskCard />
      <AddTaskButton />
    </STaskCard>
  );
};

const STaskCard = styled.div`
  padding: 40px;
`;

export default TaskCards;
