import React, { useState } from "react";
import styled from "styled-components";

const TaskCardTitle = () => {
  // クリックしたかどうか
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] =
    useState("リストのタイトルを入力");
  const onClickHandle = () => {
    setIsClick(true);
  };
  const inputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.target.value);
  };
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClick(false);
  };
  // インプットエリア入力し、外れたところからもsubmitできる
  const onhandleBlur = () => {
    setIsClick(false);
  };
  return (
    <SInputArea onClick={onClickHandle}>
      {isClick ? (
        <form onSubmit={onHandleSubmit}>
          <input
            autoFocus
            type="text"
            onChange={inputHandleChange}
            onBlur={onhandleBlur}
            value={inputCardTitle}
            maxLength={30}
          />
        </form>
      ) : (
        <STaskCardTitle>{inputCardTitle}</STaskCardTitle>
      )}
    </SInputArea>
  );
};

const SInputArea = styled.div`
  width: 100%;
  input {
    width: 100%;
    padding: 5px;
  }
`;
const STaskCardTitle = styled.h3`
  font-size: 16px;
  margin: 0;
`;

export default TaskCardTitle;
