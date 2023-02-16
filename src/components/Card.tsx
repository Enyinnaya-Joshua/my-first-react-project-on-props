import React from "react";
import styled from "styled-components";

interface pacer {
  title: string;
  description: string;
}

const Card: React.FC<pacer> = ({ title, description }) => {
  return (
    <Wrapper>
      <H1>{title}</H1>
      <P>{description}</P>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  height: 300px;
  width: 350px;
  border: 2px solid black;
  margin: 10px;
  padding-left: 10px;
`;

const H1 = styled.div`
  font-size: xx-large;
  font-weight: bold;
  margin-bottom: 10px;
`;

const P = styled.div`
  font-family: Georgia;
`;
