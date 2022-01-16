import { atom } from "recoil";

interface ModalStateType {
  isModal: boolean;
  modalType: "login" | "join" | "createRoad" | "createPost";
}

export const modalState = atom<ModalStateType>({
  key: "modalState",
  default: {
    isModal: false,
    modalType: "login",
  },
});
