import styled from "styled-components";

interface AuthInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  name: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  name,
  value,
  title,
  placeholder,
  onChange,
}) => {
  return (
    <AuthInputWrapper>
      <p>{title}</p>
      <AuthInputBox
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      ></AuthInputBox>
    </AuthInputWrapper>
  );
};

const AuthInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    color: #434343;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;
  }
`;
const AuthInputBox = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 27px;
  padding: 0 24px;
  color: #191919;
  border: none;
  background-color: #f1f1f5;
  margin-bottom: 30px;
`;

export default AuthInput;
