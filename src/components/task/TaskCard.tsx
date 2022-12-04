import React, { useState } from "react";
import styled from "styled-components";
import TaskDeleteButton from "../atoms/button/TaskDeleteButton";
import TaskInput from "../atoms/input/TaskInput";
import TaskCardTitle from "./card/TaskCardTitle";
import Tasks from "./card/Tasks";
import { TaskType } from "../../type/task";

const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  return (
    <STaskCard>
      <TaskCardTitle />
      <TaskDeleteButton />
      <Tasks taskList={taskList} />
      <TaskInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </STaskCard>
  );
};
const STaskCard = styled.div`
  width: 400px;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 20px 20px 26px;
  box-shadow: 2px 6px 8px 0px rgb(0 0 0 / 10%);
`;
export default TaskCard;
