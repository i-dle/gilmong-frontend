import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <IconBox></IconBox>
      <NavigationWrapper>
        <a>자유게시판</a>
        <a>로드맵</a>
        <a>관심로드맵</a>
      </NavigationWrapper>
      <AuthBox>
        <a>login</a>
        <p>|</p>
        <a>join</a>
      </AuthBox>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  height: 80px;
  margin: 0 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  > a {
    font-size: 15px;
    font-weight: 400;
    color: #191919;
  }
`;

const IconBox = styled.div`
  width: 231px;
  height: 80px;
  background-color: black;
`;

const AuthBox = styled.div`
  display: flex;
  gap: 12px;
  > a,
  p {
    color: #767676;
    font-weight: 400;
    font-size: 15px;
  }
`;

export default Header;
