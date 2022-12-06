import React, { FC, useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../atoms/button/AddTaskButton";
import TaskCard from "./TaskCard";
import { CardType } from "../../type/card";

const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState<CardType[]>([
    { id: "1", draggableId: "card-1" },
  ]);
  return (
    <STaskCardArea>
      {taskCardList.map((card) => (
        <TaskCard
          key={card.id}
          taskCardList={taskCardList}
          setTaskCardList={setTaskCardList}
          card={card}
        />
      ))}

      <AddTaskButton
        taskCardList={taskCardList}
        setTaskCardList={setTaskCardList}
      />
    </STaskCardArea>
  );
};

const STaskCardArea = styled.div`
  padding: 40px;
  display: flex;
`;

export default TaskCards;
