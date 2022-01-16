import styled from "styled-components";
import DefaultPost from "../common/DefaultPost";
import SearchBar from "../common/SearchBar";
import { ReactComponent as Plus } from "../../assets/Plus.svg";
import Title from "../common/Title";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../recoil/modalState";
import { useEffect, useState } from "react";
import { getBoard } from "../../utils/api/board";

interface LoadPostProps {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
  createAt: string;
  liked: boolean;
  writer: string;
}

const BestDefaultPost = [
  {
    id: 999,
    title: "레퍼런스 찾아보기",
    content:
      "디자인적 안목을 높이기 위해서는 레퍼런스를 많이 찾아보는 게 중요해요!레퍼런스 같은 경우는 보통 핀터레스트, 노트폴리오, 비핸스 등에서 찾아볼수 있고, 이 레퍼런스를 통해 다양한 디자인을 직접 보고 익힐 수 있어요!",
    likeCount: 3,
    commentCount: 4,
    createAt: "3시간 전",
    liked: false,
    writer: "이윤지",
  },
  {
    id: 998,
    title: "사용자 입장에서 생각",
    content:
      "디자인은 자신이 봤을 때 예쁜 게 아니라 항상 사용자 입장에서 생각해보면서 어떻게 하면 가장 좋은 경험을 만들어줄 수 있는지 고려해야 해요!",
    likeCount: 6,
    commentCount: 9,
    createAt: "5일 전",
    liked: false,
    writer: "정대현",
  },
  {
    id: 997,
    title: "디자인 의도 생각하기",
    content:
      "그냥 아무렇게나 한 디자인보다 항상 의도를 생각하며 한 디자인은 해당 내용을 가장 적합하게 표현할 수 있다고 생각해요!",
    likeCount: 7,
    commentCount: 2,
    createAt: "7시간 전",
    liked: false,
    writer: "윤다현",
  },
];

const LoadMap = () => {
  const [loadMapPost, setLoadMapPost] = useState<LoadPostProps[]>([]);
  const setModal = useSetRecoilState(modalState);
  useEffect(() => {
    async function getBorardAsync() {
      try {
        const response = await getBoard();
        setLoadMapPost(response.boardList as any);
      } catch (e) {
        alert("다시 시도해 주세요");
      }
    }
    getBorardAsync();
  }, []);
  return (
    <>
      <Title
        denouement="UI/UX 디자이너"
        sub="UI/UX 디자이너를 위한 로드맵입니다~"
      ></Title>
      <BestArea>
        <p>베스트</p>
        <div>
          {BestDefaultPost.map((props) => (
            <DefaultPost {...props}></DefaultPost>
          ))}
        </div>
      </BestArea>
      <PostArea>
        <InputArea>
          <SearchBar
            height="53px"
            width="604px"
            placeholder="키워드를 검색하세요"
            onChange={() => {}}
            value=""
          ></SearchBar>
        </InputArea>
        <p>중학교</p>
        <OptionArea>
          <CreateButton
            onClick={() => setModal({ isModal: true, modalType: "createPost" })}
          >
            <Plus></Plus>
            <p>작성하기</p>
          </CreateButton>
          <SortArea>
            <p>최신순</p>
            <p>|</p>
            <p>추천순</p>
            <p>|</p>
            <p>인기순</p>
          </SortArea>
        </OptionArea>
        <PostMainArea>
          {loadMapPost.map((props) => (
            <DefaultPost {...props}></DefaultPost>
          ))}
        </PostMainArea>
      </PostArea>
    </>
  );
};

const BestArea = styled.div`
  height: 628px;
  background-color: #f1f1f5;
  padding: 40px 250px 60px 250px;
  > p {
    color: #191919;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 30px;
  }
  > div {
    display: flex;
    gap: 20px;
  }
`;
const PostArea = styled.div`
  margin: 120px 250px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  > p {
    color: #191919;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

const InputArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const OptionArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreateButton = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  > p {
    color: #767676;
    font-weight: 400;
    font-size: 15px;
  }
`;
const SortArea = styled.div`
  display: flex;
  gap: 14px;
  > p {
    font-weight: 400;
    font-size: 15px;
    color: #9e9e9e;
  }
`;
const PostMainArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 20px;
`;
export default LoadMap;
