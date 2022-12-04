import { Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

import { TaskType } from "../../../type/task";

type Props = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  taskList: TaskType[];
  setTaskList: Dispatch<SetStateAction<TaskType[]>>;
};

const TaskInput: FC<Props> = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}: Props) => {
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // カードを追加
    setTaskList([...taskList, { id: uuid(), text: inputText }]);
    setInputText("");
    console.log(id);
  };
  const onHandleInputText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <SInput
          autoFocus={false}
          type="text"
          placeholder="このカードにタイトルを入力..."
          onChange={onHandleInputText}
          value={inputText}
        />
      </form>
    </div>
  );
};

const SInput = styled.input`
  width: 100%;
  padding: 16px 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  line-height: 16px;
  box-shadow: 2px 6px 8px 0px rgb(0 0 0 / 10%);
`;

export default TaskInput;
