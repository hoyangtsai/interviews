import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { QuestionModule } from "./Components";

const Wrapper = styled.div`
  margin: 14px 0px;
  padding: 0px;
  position: relative;
  color: #22282a;
`;

const mockCartReminderData = [
  {
    tagType: "auction",
    tagName: "拍賣",
    quntity: 10,
    link: "#"
  },
  {
    tagType: "market",
    tagName: "超級商城",
    quntity: 20,
    link: "#"
  }
];

const fetchCartReminderData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockCartReminderData);
    }, 500);
  });
};

const StyledHeader = styled.div`
  background: #f6f8fa;
  padding: 2px;
  padding: 10px 10px;
  font-weight: bold;
`;

const Header = (props) => {
  return <StyledHeader>{props.title || "標題"}</StyledHeader>;
};

const StyledTag = styled.span`
  background-color: ${(props) => props.tagBgColor};
  color: ${(props) => props.tagColor};
  width: 60px;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 2px;
  font-size: 13px;
  text-align: center;
  font-weight: bold;
  margin-right: 6px;
`;

const StyledItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 10px;
  padding: 10px 10px;
  color: #000;
  font-weight: bold;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledItemMain = styled.div`
  flex: 1;
`;

const Item = (props) => {
  switch (props.tagType) {
    case "auction":
      props = {
        ...props,
        ...{
          tagBgColor: "#ffe762",
          tagColor: "#000"
        }
      };
      break;
    case "market":
      props = {
        ...props,
        ...{
          tagBgColor: "#e5f7ff",
          tagColor: "#0079d0"
        }
      };
      break;
    default:
      break;
  }

  return (
    <StyledItem href={props.link}>
      <StyledTag {...props}>{props.tagName}</StyledTag>
      <StyledItemMain>{props.name}</StyledItemMain>
      <span>
        {props.linkName || "前往"}
        {"  >"}
      </span>
    </StyledItem>
  );
};

const StyledFloating = styled.a`
  position: fixed;
  top: 200px;
  right: 20px;
  background-color: #7759ff;
  color: #fff;
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 15px;
`;

const Floating = (props) => {
  return <StyledFloating href={props.link}>{props.text}</StyledFloating>;
};

const QuestionCartPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCartReminderData().then((resp) => {
      setData(resp);
    });
  });

  return (
    <Wrapper>
      <QuestionModule />
      <Header title="商品未結帳" />
      {data.map((item, index) => (
        <Item
          key={index}
          name={`還有 ${item.quntity} 件商品未結帳`}
          {...item}
        ></Item>
      ))}
      <Floating text="購物車捷徑，購買喜愛商品更便利" link="//tw.yahoo.com" />
      {/* <div>
        <div>購物車捷徑，購買喜愛商品更便利</div>
        <div>
          <div>拍賣</div>
          <div>還有 xxx 件商品未結帳</div>
          <div>前往</div>
        </div>
        <div>
          <div>拍賣</div>
          <div>還有 xxx 件商品未結帳</div>
          <div>前往</div>
        </div>
      </div> */}
    </Wrapper>
  );
};

export default QuestionCartPage;
