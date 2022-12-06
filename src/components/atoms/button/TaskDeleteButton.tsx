import React, { FC } from "react";
import styled from "styled-components";
import { CardProps } from "../../task/TaskCard";

const TaskDeleteButton: FC<CardProps> = ({
  card,
  taskCardList,
  setTaskCardList,
}) => {
  const CardDeleteBtn = (id: string) => {
    setTaskCardList(taskCardList.filter((card) => card.id !== id));
  };
  return (
    <SButton
      onClick={() => {
        CardDeleteBtn(card.id);
      }}
    >
      ×
    </SButton>
  );
};

const SButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  font-size: 24px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export default TaskDeleteButton;
