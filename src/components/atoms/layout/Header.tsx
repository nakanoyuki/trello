import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <SHeader>
      {/* <SLink> */}
      <h1>MY TRELLO</h1>
      {/* </SLink> */}
    </SHeader>
  );
};

const SHeader = styled.header`
  height: 60px;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
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
