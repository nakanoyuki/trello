import React, { FC, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import AddTaskButton from "../atoms/button/AddTaskButton";
import TaskCard from "./TaskCard";
import { CardType } from "../../type/card";

const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState<CardType[]>([
    { id: "1", draggableId: "card-1" },
  ]);
  const onDragEndTest = (result: any) => {
    const items = [...taskCardList];
    const deleteItem = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, deleteItem[0]);

    setTaskCardList(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEndTest}>
      <Droppable droppableId="droppableId" direction="horizontal">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <STaskCardArea>
              {taskCardList.map((card, index) => (
                <TaskCard
                  index={index}
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
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const STaskCardArea = styled.div`
  padding: 100px 40px;
  display: flex;
  height: 100vh;
  overflow-x: scroll;
  background-color: pink;
`;

export default TaskCards;
