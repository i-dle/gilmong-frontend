import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "../../recoil/modalState";
import { createBoard } from "../../utils/api/board";
import AuthInput from "../common/AuthInput";

const CreatePost = () => {
  const setModal = useSetRecoilState(modalState);
  const [postInfo, setPostInfo] = useState({
    title: "",
    content: "",
    step: "MIDDLE",
    jap: "UI/UX 디자이너",
  });
  const onSubmit = async () => {
    try {
      await createBoard(postInfo);
      setModal({ modalType: "createPost", isModal: false });
    } catch (e) {
      alert("계시물 작성에 실패하였습니다");
    }
  };

  return (
    <CreatePostBox onClick={(e) => e.stopPropagation()}>
      <h1>작성하기</h1>
      <AuthInput
        onChange={(e) =>
          setPostInfo({
            ...postInfo,
            [e.currentTarget.name]: e.currentTarget.value,
          })
        }
        name="title"
        placeholder="제목을 입력해주세요."
        title="제목"
        value={postInfo.title}
      ></AuthInput>
      <ContentTitle>내용</ContentTitle>
      <ContentArea
        name="content"
        onChange={(e) =>
          setPostInfo({
            ...postInfo,
            [e.currentTarget.name]: e.currentTarget.value,
          })
        }
        value={postInfo.content}
        placeholder="내용을 작성해주세요."
      ></ContentArea>
      <MenuBar>
        <CancleText
          onClick={() => setModal({ isModal: false, modalType: "createPost" })}
        >
          취소
        </CancleText>
        <SubmitText onClick={onSubmit}>업로드</SubmitText>
      </MenuBar>
    </CreatePostBox>
  );
};

const CreatePostBox = styled.div`
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

const ContentArea = styled.textarea`
  height: 245px;
  width: 100%;
  resize: none;
  color: #191919;
  background-color: #f1f1f5;
  border: none;
  border-radius: 10px;
  padding: 20px 24px;
  margin-bottom: 70px;
`;
const MenuBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
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
const ContentTitle = styled.p`
  color: #434343;
  font-size: 16px;
  margin-bottom: 10px;
`;

export default CreatePost;
