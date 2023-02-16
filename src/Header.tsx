import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo>CodeLab</Logo>
      <Nav>
        <NavigationText>
          <Navigation>Home</Navigation>
          <Navigation>Home</Navigation>
          <Navigation>Home</Navigation>
        </NavigationText>

        <Button>Add</Button>
      </Nav>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: black;
`;

const Logo = styled.div`
  margin-left: 20px;
  font-size: xx-large;
  color: gold;
  font-weight: bold;
`;

const Nav = styled.div`
  display: flex;
  margin-right: 20px;
`;

const NavigationText = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 100px;
  margin-top: 5px;
`;

const Navigation = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;

const Button = styled.button`
  height: 40px;
  width: 100px;
  margin-left: 20px;
`;
