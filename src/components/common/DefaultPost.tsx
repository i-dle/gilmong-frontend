import styled from "styled-components";
import { ReactComponent as DefaultMenu } from "../../assets/MenuBar.svg";
import { ReactComponent as Good } from "../../assets/Good.svg";
import { ReactComponent as Comment } from "../../assets/Comment.svg";
import { Link } from "react-router-dom";

interface DefaultPostProps {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
  createAt: string;
  liked: boolean;
  writer: string;
}

const DefaultPost: React.FC<DefaultPostProps> = ({
  commentCount,
  id,
  title,
  liked,
  createAt,
  content,
  likeCount,
  writer,
}) => {
  return (
    <DefaultPostBox to={`/showpost/${id}`}>
      <Header>
        <InfoText>
          <p style={{ marginRight: "10px" }}>{writer}</p>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 400,
              color: "#767676",
            }}
          >
            {createAt}
          </p>
        </InfoText>
        <DefaultMenu />
      </Header>
      <ContentBox>
        <h2>{title}</h2>
        <p>{content}</p>
      </ContentBox>
      <EctBar>
        <div>
          <Good></Good>
          <p>{likeCount}</p>
        </div>
        <div>
          <Comment></Comment>
          <p>{commentCount}</p>
        </div>
      </EctBar>
    </DefaultPostBox>
  );
};

const DefaultPostBox = styled(Link)`
  width: 396px;
  height: 419px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background-color: #ffffff;
`;

const Header = styled.div`
  height: 70px;
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;
`;
const InfoText = styled.div`
  display: flex;
  align-items: center;
  > p {
    font-size: 15px;
    font-weight: 400;
    color: #191919;
  }
`;

const ContentBox = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  > h2 {
    font-weight: bold;
    color: #191919;
    font-size: 19px;
    margin-bottom: 20px;
  }
  > p {
    color: #767676;
    font-size: 16px;
    font-weight: 400;
    white-space: pre-wrap;
  }
`;

const EctBar = styled.div`
  display: flex;
  gap: 22px;
  margin: auto 0 27px 30px;
  > div {
    display: flex;
    gap: 10px;
    > p {
      color: #767676;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
export default DefaultPost;
