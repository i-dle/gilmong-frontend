import { getRequest, getRequestWithAccessToken } from "./default";

export const boardSearch = async (props: string) => {
  try {
    const response = await getRequest().get(`/board/${props}`);
    return response.data;
  } catch (e) {
    return false;
  }
};

interface CreateBoardProps {
  title: string;
  content: string;
  step: string;
  jap: string;
}

export const createBoard = async (props: CreateBoardProps) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      await getRequestWithAccessToken(token).post("/board", props);
    }
  } catch (e) {
    return false;
  }
};

export const getBoard = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const response = await getRequestWithAccessToken(token).get(
        `/board/list?step=MIDDLE&jap=UI/UX 디자이너`
      );
      return response.data;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export const showDetaillBoard = async (id: string) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const response = await getRequestWithAccessToken(token).get(
        `/board?boardId=${id}`
      );
      return response.data;
    }
    return false;
  } catch (e) {
    return false;
  }
};
