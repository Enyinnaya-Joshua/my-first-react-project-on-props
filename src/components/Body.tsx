import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Body: React.FC = () => {
  return (
    <Wrapper>
      <Card
        title="This is the first card"
        description="This is the first description fellow Gideon Ekeke asked us to change, though it was quite difficult for me but i was able to ask for help from one of the fellow's and he asisted me."
      />
      <Card
        title="This is the second card"
        description="This is the second description of the assignment, though this part wasn't hard or difficult for me. i was able to complete the task in the space of some minutes"
      />
      <Card
        title="This is the third card"
        description="This is the second description of the assignment, though this part wasn't hard or difficult for me. i was able to complete the task in the space of some minutes"
      />
      <Card
        title="This is the fourth card"
        description="This is the second description of the assignment, though this part wasn't hard or difficult for me. i was able to complete the task in the space of some minutes"
      />
      <Card
        title="This is the fifth card"
        description="This is the second description of the assignment, though this part wasn't hard or difficult for me. i was able to complete the task in the space of some minutes"
      />
      <Card
        title="This is the sixth card"
        description="This is the sixth description of the assignment, though this part wasn't hard or difficult for me. i was able to complete the task in the space of some minutes"
      />
      <Card
        title="This is the seventh card"
        description="This is the second description of the assignment, though this part wasn't hard or difficult for me. i was able to complete the task in the space of some minutes"
      />
      <Card
        title="This is the eigth card"
        description="This is the eigth description of the assignment, though this part wasn't hard or difficult for me. i was able to complete the task in the space of some minutes"
      />
      <Card
        title="This is the nineth card"
        description="This is the nineth description of the assignment, though this part wasn't hard or difficult for me. i was able to complete the task in the space of some minutes"
      />
    </Wrapper>
  );
};

export default Body;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
`;
