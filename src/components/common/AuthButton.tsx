import styled from "styled-components";

interface AuthButtonProps {
  onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ children, onClick }) => {
  return <ButtonBox onClick={onClick}>{children}</ButtonBox>;
};

const ButtonBox = styled.button`
  background-color: #682bfb;
  color: #ffffff;
  font-size: 19px;
  font-weight: 700;
  width: 100%;
  height: 54px;
  margin-top: 20px;
  border-radius: 27px;
`;

export default AuthButton;
