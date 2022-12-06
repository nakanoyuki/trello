import { FC, ReactNode } from "react";
import styled from "styled-components";

import { Draggable } from "react-beautiful-dnd";

import { TaskType } from "../../../type/task";
import { TasksProps } from "./Tasks";

type TaskProps = {
  task: TaskType;
} & TasksProps;

const Task: FC<TaskProps> = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <STaskCard>
            <p>{task.text}</p>

            <button
              onClick={() => {
                handleDelete(task.id);
              }}
            >
              削除
            </button>
          </STaskCard>
        </div>
      )}
    </Draggable>
  );
};

const STaskCard = styled.li`
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  list-style-type: none;
  margin: 0 auto 20px;
  box-shadow: 2px 6px 8px 0px rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background: #fff;
    border: none;
    cursor: pointer;
  }
`;

export default Task;
