import styled from "styled-components";
import Title from "../common/Title";
import { ReactComponent as Good } from "../../assets/Good.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showDetaillBoard } from "../../utils/api/board";

interface ShowDetaill {
  title: string;
  content: string;
  writer: string;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  commentResponseList: commentResponseList[];
  liked: boolean;
}

type commentResponseList = {
  content: string;
  nickname: string;
  replyCount: string;
  createdAt: string;
  replyResponseList: replyResponseList[];
};
type replyResponseList = {
  content: string;
  nickname: string;
  createdAt: string;
};
const ShowPost = () => {
  const param = useParams();
  const [showDetaill, setShowDetaill] = useState<ShowDetaill>();
  useEffect(() => {
    async function ShowDetaillFC() {
      try {
        if (param.id) setShowDetaill(await showDetaillBoard(param.id));
      } catch (e) {
        alert("실패하였습니다");
      }
    }
    ShowDetaillFC();
  }, [param]);
  return (
    <div style={{ paddingBottom: "109px" }}>
      <Title
        denouement="UI/UX 디자이너"
        sub="UI/UX 디자이너를 위한 로드맵입니다~"
      ></Title>
      <ShowPostWapper>
        <TitleWrapper>
          <h2>{showDetaill?.title}</h2>
          <div>
            <h3>{showDetaill?.writer}</h3>
            <p>30분 전</p>
          </div>
        </TitleWrapper>
        <ContentWrapper>
          {showDetaill?.content}
          <div>
            <GoodButton>
              <Good></Good>
              <p>{showDetaill?.likeCount}</p>
            </GoodButton>
            <CollectButton href="https://open.kakao.com/o/gIySjHUd">
              모으기
            </CollectButton>
          </div>
        </ContentWrapper>
        <CommentBox>
          <h2>댓글 {showDetaill?.commentCount}</h2>

          {showDetaill?.commentResponseList.map((props) => (
            <>
              <div>
                {props.nickname}
                <p>{props.createdAt}</p>
              </div>
              <h3>{props.content}</h3>
              <p>답글쓰기</p>
            </>
          ))}
        </CommentBox>
        <CommentInput>
          <input></input>
          <div>등록</div>
        </CommentInput>
      </ShowPostWapper>
    </div>
  );
};

const ShowPostWapper = styled.div`
  margin: 0 250px;
  padding: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #ededed;
  > h2 {
    color: #191919;
    font-size: 24px;
    font-weight: 700;
  }
  > div {
    display: flex;
    gap: 12px;
    margin-bottom: 22px;
    > h3 {
      color: #767676;
      font-size: 15px;
      font-weight: 400;
    }
    > p {
      color: #9e9e9e;
      font-size: 13px;
      font-weight: 400;
    }
  }
`;

const ContentWrapper = styled.div`
  margin-top: 40px;
  color: #767676;
  font-size: 16px;
  font-weight: 400;
  > div {
    display: flex;
    gap: 24px;
    margin-top: 104px;
    justify-content: center;
    padding-bottom: 40px;
    border-bottom: 1px solid #ededed;
  }
`;

const GoodButton = styled.button`
  width: 92px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0px 0px 20px rgba(104, 43, 251, 0.12);
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    margin-left: 9px;
    font-size: 18px;
    color: #767676;
    font-weight: 400;
  }
`;
const CollectButton = styled.a`
  width: 92px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0px 0px 20px rgba(104, 43, 251, 0.12);
  color: #682bfb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: none;
  background-color: white;
  font-weight: 700;
`;

const CommentBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  > h2 {
    font-weight: 700;
    font-size: 19px;
    color: #191919;
    margin-bottom: 30px;
  }
  > div {
    display: flex;
    gap: 12px;
    color: #191919;
    font-size: 16px;
    font-weight: 400;
    > p {
      color: #9e9e9e;
      font-size: 13px;
      font-weight: 400;
    }
  }
  > h3 {
    color: #767676;
    font-size: 16px;
    font-weight: 400;
    margin: 10px 0 13px 0;
  }
  > p {
    color: #9e9e9e;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;

const CommentInput = styled.div`
  position: relative;
  > input {
    width: 100%;
    height: 54px;
    border-radius: 27px;
    border: none;
    font-size: 15px;
    font-weight: 400;
    background-color: #f1f1f5;
    padding: 0 30px;
    color: #9e9e9e;
  }
  > div {
    color: #682bfb;
    position: absolute;
    top: 19px;
    right: 31px;
  }
`;

export default ShowPost;
