import { Dispatch, SetStateAction } from "react";
import { useState } from "react";

type Props = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  taskList: string[];
  setTaskList: Dispatch<SetStateAction<string[]>>;
};

const TaskInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}: Props) => {
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onHandleInputText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
    // console.log(inputText);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="タスク追加"
          onChange={onHandleInputText}
        />
      </form>
    </div>
  );
};

export default TaskInput;
