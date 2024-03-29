import { Dispatch, FC, SetStateAction } from "react";
import React from "react";
import styled from "styled-components";
import { CardType } from "../../../type/card";
import uuid from "react-uuid";

type Props = {
  taskCardList: CardType[];
  setTaskCardList: Dispatch<SetStateAction<CardType[]>>;
};
const AddTaskButton: FC<Props> = ({ taskCardList, setTaskCardList }: Props) => {
  const HandleAddCard = () => {
    const cardId = uuid();
    setTaskCardList([
      ...taskCardList,
      { id: cardId, draggableId: `card-${cardId}` },
    ]);
  };
  return (
    <div>
      <SButton onClick={HandleAddCard}>+もう１つリストを追加</SButton>
    </div>
  );
};

const SButton = styled.button`
  padding: 0 20px;
  height: 50px;
  background: #f7f7f7;
  border-radius: 10px;
  border: none;
  width: 400px;
  text-align: left;
  cursor: pointer;
`;
export default AddTaskButton;
