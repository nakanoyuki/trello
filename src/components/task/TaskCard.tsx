import React, { useState } from "react";
import styled from "styled-components";
import TaskDeleteButton from "../atoms/button/TaskDeleteButton";
import TaskInput from "../atoms/input/TaskInput";
import TaskCardTitle from "./card/TaskCardTitle";
import Tasks from "./card/Tasks";
import { Task } from "../../type/task";

const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <STaskCard>
      <TaskCardTitle />
      <TaskDeleteButton />
      <TaskInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks taskList={taskList} />
    </STaskCard>
  );
};
const STaskCard = styled.div`
  width: 400px;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 20px 20px 26px;
`;
export default TaskCard;
