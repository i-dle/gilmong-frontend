import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Category from "../common/Category";
import DefaultPost from "../common/DefaultPost";
import LoadMapPost from "../common/LoadMapPost";
import SearchBar from "../common/SearchBar";
import { ReactComponent as Plus } from "../../assets/Plus.svg";
import BannerImage from "../../assets/BannerImage.png";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { modalState } from "../../recoil/modalState";
import { categoryListState } from "../../recoil/categoryState";
import { CategoryLists } from "../../constance";
import { getJobList, getJobListMain } from "../../utils/api/job";

interface PostListProps {
  interest: boolean;
  jab: string;
  intro: string;
  branch: string;
}

const Main = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const setModalData = useSetRecoilState(modalState);
  const categoryData = useRecoilValue(categoryListState);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    try {
      setPostList([]);
      categoryData.map(async (props, i) => {
        if (props) {
          const response = await getJobListMain(
            String(CategoryLists[i].categoryId)
          );
          let newObject = [...postList, ...response];
          console.log(newObject);
          setPostList(newObject as any);
        }
      });
    } catch {
      alert("다시 시도해 주세요");
    }
  }, [categoryData]);

  return (
    <>
      <Benner></Benner>
      <MainWrapper>
        <SearchBar
          height="53px"
          width="604px"
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.currentTarget.value)
          }
          placeholder="원하시는 직업의 로드맵을 검색하세요"
        ></SearchBar>
        <div>
          <Category></Category>
          <ContentsWrapper>
            <OptionalBox>
              <CreateRoadMap
                onClick={() =>
                  setModalData({ isModal: true, modalType: "createRoad" })
                }
              >
                <Plus></Plus>
                <p>로드맵 생성하기</p>
              </CreateRoadMap>
              <SortMenu>
                <p>기본정렬</p>
                <p>|</p>
                <p>추천순</p>
                <p>|</p>
                <p>최신순</p>
                <p>|</p>
                <p>인기순</p>
              </SortMenu>
            </OptionalBox>
            {postList.map((props: PostListProps) => (
              <LoadMapPost
                description={props.intro}
                interest={props.interest}
                title={props.jab}
              ></LoadMapPost>
            ))}
          </ContentsWrapper>
        </div>
      </MainWrapper>
    </>
  );
};

const Benner = styled.div`
  width: 100%;
  height: 400px;
  background: #bebebe;
  background-image: ${`url(${BannerImage})`};
`;

const MainWrapper = styled.div`
  margin: 120px 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 38px;
  > div {
    display: flex;
  }
`;

const OptionalBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 916px;
`;
const CreateRoadMap = styled.div`
  display: flex;
  cursor: pointer;
  gap: 10px;
  align-items: center;

  > p {
    font-size: 15px;
    font-weight: 400;
    color: #767676;
  }
`;

const SortMenu = styled.div`
  display: flex;
  gap: 14px;
  > p {
    color: #9e9e9e;
    font-size: 15px;
    font-weight: 400;
  }
`;

const ContentsWrapper = styled.div`
  margin-top: 40px;
  margin-left: 63px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Main;
