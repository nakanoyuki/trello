import { Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";

type Props = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  taskList: string[];
  setTaskList: any;
  // setTaskList: Dispatch<SetStateAction<string[]>>;
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
    setTaskList([...taskList, { text: inputText }]);
    setInputText("");
  };
  const onHandleInputText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="タスク追加"
          onChange={onHandleInputText}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskInput;
