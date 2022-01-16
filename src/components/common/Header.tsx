import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import Icon from "../../assets/Icon.svg";
import { modalState } from "../../recoil/modalState";
const Header = () => {
  const setModalData = useSetRecoilState(modalState);
  return (
    <HeaderBox>
      <IconBox to="/"></IconBox>
      <NavigationWrapper>
        <Link to="/">자유게시판</Link>
        <Link to="/">로드맵</Link>
        <Link to="/">관심로드맵</Link>
      </NavigationWrapper>
      {localStorage.getItem("accessToken") ? (
        <Name>기무딱찬님</Name>
      ) : (
        <AuthBox>
          <p
            onClick={() => setModalData({ isModal: true, modalType: "login" })}
          >
            login
          </p>
          <p>|</p>
          <p onClick={() => setModalData({ isModal: true, modalType: "join" })}>
            join
          </p>
        </AuthBox>
      )}
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

const IconBox = styled(Link)`
  width: 61px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${Icon});
`;

const AuthBox = styled.div`
  display: flex;
  gap: 12px;
  > a,
  p {
    color: #767676;
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;
  }
`;
const Name = styled.div`
  color: #191919;
  font-weight: 700;
  font-size: 15px;
`;

export default Header;
