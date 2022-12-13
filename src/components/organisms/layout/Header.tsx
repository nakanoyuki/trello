import React, { useCallback } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickLogout = useCallback(() => history.push("/home/logout"), []);
  return (
    <BrowserRouter>
      <SHeader>
        <Link to="/home" onClick={onClickHome}>
          <h1>MY TRELLO</h1>
        </Link>
        <Link to="/home/logout" onClick={onClickLogout}>
          ログアウト
        </Link>
      </SHeader>
    </BrowserRouter>
  );
};

const SHeader = styled.header`
  height: 60px;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  a {
    text-decoration: none;
  }
  h1 {
    color: #f9a65a;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    width: 100%;
  }
`;
// const SLink = styled.header`
//   text-align: center;
//   color: #f9a65a;
//   font-size: 24px;
// `;
export default Header;
