import React, { FC } from "react";
import { CardType } from "../../../type/card";
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
    <div>
      <button
        onClick={() => {
          CardDeleteBtn(card.id);
        }}
      >
        ❌
      </button>
    </div>
  );
};

export default TaskDeleteButton;
