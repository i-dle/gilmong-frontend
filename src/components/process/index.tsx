import Title from "../common/Title";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Process = () => {
  return (
    <>
      <Title
        denouement="UI/UX 디자이너"
        sub="UI/UX 디자이너를 위한 로드맵입니다~"
      ></Title>
      <ProcessWrapper>
        <ProcessCircleWrapper to="/roadmap">
          <ProcessCircle>
            <div></div>
          </ProcessCircle>
          <p>중학교</p>
        </ProcessCircleWrapper>
        <ProcessCircleWrapper to="/roadmap">
          <ProcessCircle>
            <div></div>
          </ProcessCircle>
          <p>고등학교</p>
        </ProcessCircleWrapper>
        <ProcessCircleWrapper to="/roadmap">
          <ProcessCircle>
            <div></div>
          </ProcessCircle>
          <p>대학교</p>
        </ProcessCircleWrapper>
        <LastCircleWrapper>
          <LastCircle></LastCircle>
          <p>달성</p>
        </LastCircleWrapper>
      </ProcessWrapper>
      <Line></Line>
    </>
  );
};

const ProcessWrapper = styled.div`
  position: relative;
  display: flex;
  padding-top: 150px;
  justify-content: space-between;
  align-items: center;
  margin: 0 240px;
`;

const ProcessCircleWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  > p {
    color: #aa87ff;
    font-weight: 700;
    font-size: 22px;
    z-index: -2;
  }
`;

const ProcessCircle = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #aa87ff;
  display: flex;
  z-index: -1;
  justify-content: center;
  background-color: white;
  align-items: center;
  > div {
    width: 17px;
    height: 17px;
    background-color: #aa87ff;
    border-radius: 50%;
  }
`;

const LastCircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;
  > p {
    color: #fee332;
    font-weight: 700;
    font-size: 22px;
    z-index: -1;
  }
`;

const LastCircle = styled.div`
  background-color: #fee332;
  width: 16px;
  z-index: -1;
  height: 16px;
  margin-top: 14px;
  border-radius: 50%;
`;

const Line = styled.div`
  position: relative;
  margin: 0 260px;
  top: -62px;
  left: 0;
  z-index: -5;
  border: 2px dashed #aa87ff;
`;

export default Process;
