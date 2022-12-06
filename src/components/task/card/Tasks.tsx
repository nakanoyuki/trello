import React, { FC } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { TaskType } from "../../../type/task";
import Task from "../card/Task";

export type TasksProps = {
  taskList: TaskType[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
  index: number;
};

// function Tasks(props: TasksProps) {
// const Tasks = ( props:TasksProps ) => {
const Tasks: FC<TasksProps> = ({ taskList, setTaskList }) => {
  const onDragEndTest = (result: any) => {
    const items = [...taskList];
    const deleteItem = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, deleteItem[0]);

    setTaskList(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEndTest}>
      <Droppable droppableId="droppableId">
        {(provided) => (
          <div
            className="testListArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <STaskCards>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    // key={`${task.text + index}`}
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
            </STaskCards>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const STaskCards = styled.ul`
  padding: 0;
`;

export default Tasks;
