import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "../../recoil/modalState";
import { postJoin } from "../../utils/api/auth";
import AuthButton from "../common/AuthButton";
import AuthInput from "../common/AuthInput";

const JoinModal = () => {
  const [joinInfo, setJoinInfo] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const setModal = useSetRecoilState(modalState);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setJoinInfo({
      ...joinInfo,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      await postJoin(joinInfo);
      alert("회원가입에 성공하셨습니다");
      setModal({
        isModal: false,
        modalType: "join",
      });
    } catch (e) {
      alert("회원가입에 실패하였습니다");
    }
  };
  return (
    <JoinModalWrapper onClick={(e) => e.stopPropagation()}>
      <h1>회원가입</h1>
      <AuthInput
        value={joinInfo.id}
        onChange={onChangeInput}
        placeholder="아이디를 입력해주세요."
        title="아이디"
        name="id"
      ></AuthInput>
      <AuthInput
        value={joinInfo.password}
        onChange={onChangeInput}
        placeholder="비밀번호를 입력하세요"
        title="비밀번호"
        name="password"
      ></AuthInput>
      <AuthInput
        value={joinInfo.nickname}
        onChange={onChangeInput}
        placeholder="닉네임을 입력해주세요."
        title="닉네임"
        name="nickname"
      ></AuthInput>
      <AuthButton onClick={onSubmit}>회원가입</AuthButton>
    </JoinModalWrapper>
  );
};
const JoinModalWrapper = styled.div`
  width: 396px;
  border-radius: 10px;
  background-color: white;
  padding: 40px 40px 50px 40px;
  > h1 {
    color: #191919;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 40px;
  }
`;

export default JoinModal;
