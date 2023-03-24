import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Questions = styled.section`
  color: #26282a;
  padding: 0 8px;
  line-height: 1.3em;
  margin: 8px;

  & ul {
    list-style: none;
    line-height: 1.5em;
  }

  & li::before {
    content: "Q:";
    padding-right: 8px;
  }
`;

const CommonDiv = styled.div`
  height: 20px;
  width: 100px;
  background: red;
  margin: 4px;
`;

const HideDiv = styled(CommonDiv)`
  visibility: hidden;
`;

const CssHideDiv = () => <HideDiv />;

const HorizontalContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const HorizontalDiv = styled(CommonDiv)`
  flex: 0 0 100px;
`;

const CssHorizontalDiv = () => (
  <HorizontalContainer>
    <HorizontalDiv />
    <HorizontalDiv />
    <HorizontalDiv />
    <HorizontalDiv />
    <HorizontalDiv />
    <HorizontalDiv />
    <HorizontalDiv />
    <HorizontalDiv />
    <HorizontalDiv />
    <HorizontalDiv />
  </HorizontalContainer>
);

const QuestionCssJsPage = () => {
  return (
    <main>
      <Link to="/">Home</Link>
      <Questions>
        <h2>CSS</h2>
        <ul>
          <li>請說明 box model</li>
          <li>
            {"如何將底下 <div> 隱藏"}
            <CssHideDiv />
          </li>
          <li>
            {"如何將連續的 <div> 橫排成一行，超出頁寬可以橫移"}
            <CssHorizontalDiv />
          </li>
        </ul>
      </Questions>
      <Questions>
        <h2>Web 開發</h2>
        <ul>
          <li>
            請解釋 cookie attribute: httponly, secure, session, samesite 用途
          </li>
          <li>Cross Domain 有哪些方式可以做到？</li>
          <li>請解釋 DOM event flow，要如何從中截斷？</li>
          <li>舉出一個頁面效能調校的例子，說明如何發現效能問題以及改善方法</li>
          <li>{"請說明 <script async> 和 <script defer> 用途"}</li>
          <li>請說明 XSS 原理及防禦方法</li>
          <li>請說明 CSRF 原理及防禦方法</li>
        </ul>
      </Questions>
    </main>
  );
};

export default QuestionCssJsPage;
