import styled from "styled-components";

interface TitleProps {
  denouement: string;
  sub: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { denouement, sub } = props;
  return (
    <TitleWrapper>
      <h1>{denouement}</h1>
      <h3>{sub}</h3>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  width: 100%;
  height: 368px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    color: #682bfb;
    font-size: 55px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  > h3 {
    font-weight: 400;
    color: #767676;
    font-size: 16px;
  }
`;

export default Title;
