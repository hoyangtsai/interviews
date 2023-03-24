import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ColorDiv = styled.div`
  display: inline-block;
  height: 16px;
  width: 56px;
  background: ${(props) => props.bg};
  padding: 4px;
  border-radius: 4px;
  margin: 0 4px;
`;

export const QuestionModule = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <img
        alt="cart reminder"
        src="https://i.ibb.co/qrd0TMH/Screen-Shot-2021-08-09-at-1-12-41-AM.png"
        width="100%"
      />
      <div>
        <ColorDiv bg="#ffe762">#ffe762</ColorDiv>
        <ColorDiv bg="#e5f7ff">#e5f7ff</ColorDiv>
        <ColorDiv bg="#0079d0">#0079d0</ColorDiv>
        <ColorDiv bg="#7759ff">#7759ff</ColorDiv>
      </div>
      <hr />
    </>
  );
};
