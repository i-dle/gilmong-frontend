import LoginModal from "./LoginModal";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil/modalState";
import JoinModal from "./JoinModal";
import CreateRoad from "./CreateRoad";
import CreatePost from "./CreatePost";
const Modal = () => {
  const [modalData, setModalData] = useRecoilState(modalState);
  return (
    <>
      {modalData.isModal ? (
        <ModalWrapper
          onClick={() => setModalData({ ...modalData, isModal: false })}
        >
          {modalData.modalType === "login" && <LoginModal></LoginModal>}
          {modalData.modalType === "join" && <JoinModal></JoinModal>}
          {modalData.modalType === "createRoad" && <CreateRoad></CreateRoad>}
          {modalData.modalType === "createPost" && <CreatePost></CreatePost>}
        </ModalWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default Modal;
