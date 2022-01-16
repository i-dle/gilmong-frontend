import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "../../recoil/modalState";
import { postJoin, PutLogin, PutLoginProps } from "../../utils/api/auth";
import AuthButton from "../common/AuthButton";
import AuthInput from "../common/AuthInput";

const LoginModal = () => {
  const [loginInfo, setLoginInfo] = useState<PutLoginProps>({
    id: "",
    password: "",
  });
  const setModal = useSetRecoilState(modalState);
  const onChagneLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      const token = await PutLogin(loginInfo);
      console.log(token);
      if (token) {
        localStorage.setItem("accessToken", token.accessToken);
        alert("로그인 성공");
        setModal({ modalType: "login", isModal: false });
        window.location.reload();
      } else {
        alert("로그인 실패");
      }
    } catch (e) {
      alert("로그인에 실패하였습니다");
    }
  };
  return (
    <LoginModalWrapper onClick={(e) => e.stopPropagation()}>
      <h1>로그인</h1>
      <AuthInput
        name="id"
        onChange={onChagneLoginInfo}
        placeholder="아이디를 입력하세요"
        title="아이디"
        value={loginInfo.id}
      ></AuthInput>
      <AuthInput
        name="password"
        onChange={onChagneLoginInfo}
        placeholder="비밀번호를 입력하세요"
        title="비밀번호"
        value={loginInfo.password}
      ></AuthInput>
      <AuthButton onClick={onSubmit}>로그인</AuthButton>
    </LoginModalWrapper>
  );
};

const LoginModalWrapper = styled.div`
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

export default LoginModal;
