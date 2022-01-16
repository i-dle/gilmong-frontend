import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { CategoryLists } from "../../constance";
import { modalState } from "../../recoil/modalState";
import { createJob } from "../../utils/api/job";
import AuthInput from "../common/AuthInput";

const CreateRoad = () => {
  const [roadData, setRoadData] = useState({
    name: "",
    intro: "",
    branch: "",
    branchId: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const setModal = useSetRecoilState(modalState);
  const onChangeRoadData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setRoadData({
      ...roadData,
      [name]: value,
    });
  };
  const onSubmit = async () => {
    if (!(roadData.branchId && roadData.intro && roadData.name)) {
      alert("빈 칸을 채워주세요!");
      return;
    } else {
      try {
        await createJob({
          branch: String(roadData.branchId),
          intro: roadData.intro,
          name: roadData.name,
        });
        alert("성공적으로 추가 되었습니다");
        setModal({ isModal: false, modalType: "createRoad" });
      } catch (e) {
        alert("실패하였습니다");
      }
    }
  };
  return (
    <CreateRoadBox onClick={(e) => e.stopPropagation()}>
      <h1>로드맵 생성하기</h1>
      <AuthInput
        value={roadData.name}
        name="name"
        title="직업"
        placeholder="직업명을 입력해주세요."
        onChange={onChangeRoadData}
      ></AuthInput>
      <AuthInput
        value={roadData.intro}
        name="intro"
        title="설명"
        placeholder="설명을 작성해주세요."
        onChange={onChangeRoadData}
      ></AuthInput>
      <RoadMapTitle>분야</RoadMapTitle>
      <RoadMapOption onClick={() => setIsOpen(!isOpen)}>
        <p>{roadData.branch}</p>
      </RoadMapOption>
      <RoadMapList isOpen={isOpen}>
        {CategoryLists.map((props) => (
          <RoadColumn
            onClick={() => {
              setRoadData({
                ...roadData,
                branch: props.title,
                branchId: String(props.categoryId),
              });
              setIsOpen(false);
            }}
          >
            {props.title}
          </RoadColumn>
        ))}
      </RoadMapList>
      <MenuBar>
        <CancleText
          onClick={() => setModal({ isModal: false, modalType: "createRoad" })}
        >
          취소
        </CancleText>
        <SubmitText onClick={onSubmit}>생성하기</SubmitText>
      </MenuBar>
    </CreateRoadBox>
  );
};

const CreateRoadBox = styled.div`
  width: 812px;
  padding: 60px;
  background-color: white;
  border-radius: 10px;
  > h1 {
    color: #191919;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 60px;
  }
`;

const RoadMapTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #434343;
  margin-bottom: 10px;
`;

const RoadMapOption = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  border-radius: 27px;
  align-items: center;
  padding: 25px;
  background-color: #f1f1f5;
  > p {
    color: #191919;
    font-size: 16px;
    font-weight: 400;
  }
`;

const RoadMapList = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  height: 250px;
  width: 692px;
  background-color: #f1f1f5;
  overflow-y: auto;
  border-radius: 10px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const RoadColumn = styled.div`
  height: 53px;
  color: #191919;
  align-items: center;
  font-size: 16px;
  padding: 15px;
  border-bottom: 1px solid #dbdbdb;
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  margin-top: 70px;
`;
const SubmitText = styled.p`
  color: #682bfb;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
`;
const CancleText = styled.p`
  color: #9e9e9e;
  font-weight: 400;
  cursor: pointer;
  font-size: 22px;
`;

export default CreateRoad;
