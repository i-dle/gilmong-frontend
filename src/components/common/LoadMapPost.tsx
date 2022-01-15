import styled from "styled-components";
import { ReactComponent as FillHeart } from "../../assets/FillHeart.svg";
import { ReactComponent as NotFillHeart } from "../../assets/NotFillHeart.svg";

interface LoadMapPostProps {
  title: string;
  description: string;
  isHeart: boolean;
}

const LoadMapPost: React.FC<LoadMapPostProps> = (props) => {
  const { title, description, isHeart } = props;
  return (
    <LoadMapPostBox>
      <LoadMapText>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </LoadMapText>
      <HeartBox>{isHeart ? <FillHeart /> : <NotFillHeart />}</HeartBox>
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
const LoadMapText = styled.div`
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
