import React, { FC, useState } from "react";
import styled from "styled-components";
import TaskDeleteButton from "../atoms/button/TaskDeleteButton";
import TaskInput from "../atoms/input/TaskInput";
import TaskCardTitle from "./card/TaskCardTitle";
import Tasks from "./card/Tasks";
import { TaskType } from "../../type/task";
import { CardType } from "../../type/card";

export type CardProps = {
  card: CardType;
  taskCardList: CardType[];
  setTaskCardList: React.Dispatch<React.SetStateAction<CardType[]>>;
};

const TaskCard: FC<CardProps> = ({ card, taskCardList, setTaskCardList }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  return (
    <STaskCard>
      <STaskCardFlex>
        <TaskCardTitle />
        <TaskDeleteButton
          key={card.id}
          card={card}
          taskCardList={taskCardList}
          setTaskCardList={setTaskCardList}
        />
      </STaskCardFlex>
      <Tasks taskList={taskList} setTaskList={setTaskList} index={1} />
      <TaskInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </STaskCard>
  );
};
const STaskCardFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const STaskCard = styled.div`
  width: 400px;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 20px 20px 26px;
  box-shadow: 2px 6px 8px 0px rgb(0 0 0 / 10%);
  margin: 0 20px 0 0;
  position: relative;
  top: 0;
`;

export default TaskCard;
