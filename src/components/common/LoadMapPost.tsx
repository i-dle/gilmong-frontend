import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as FillHeart } from "../../assets/FillHeart.svg";
import { ReactComponent as NotFillHeart } from "../../assets/NotFillHeart.svg";
import { setInterested } from "../../utils/api/job";

interface LoadMapPostProps {
  title: string;
  description: string;
  interest: boolean;
}

const LoadMapPost: React.FC<LoadMapPostProps> = (props) => {
  const { title, description, interest } = props;
  const [isInterest, setInterest] = useState(interest);
  return (
    <LoadMapPostBox>
      <LoadMapText to="/process">
        <h2>{title}</h2>
        <h3>{description}</h3>
      </LoadMapText>
      <HeartBox
        onClick={() => {
          setInterest(!isInterest);
          const response = setInterested(title);
          console.log(response);
        }}
      >
        {isInterest ? <FillHeart /> : <NotFillHeart />}
      </HeartBox>
    </LoadMapPostBox>
  );
};

const LoadMapPostBox = styled.div`
  width: 916px;
  height: 115px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  justify-content: space-between;
  display: flex;
`;
const LoadMapText = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 30px;
  > h2 {
    font-size: 19px;
    font-weight: 700;
    color: #191919;
  }
  > h3 {
    font-size: 16px;
    color: #434343;
    font-weight: 400;
  }
`;
const HeartBox = styled.div`
  border-left: 1px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
`;

export default LoadMapPost;
