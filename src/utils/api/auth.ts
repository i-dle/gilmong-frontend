import { getRequest, getRequestWithAccessToken } from "./default";

interface PostJoinProps {
  id: string;
  password: string;
  nickname: string;
}

export const postJoin = async (props: PostJoinProps) => {
  try {
    await getRequest().post("/users", props);
    return true;
  } catch (e) {
    return false;
  }
};

export interface PutLoginProps {
  id: string;
  password: string;
}

export const PutLogin = async (props: PutLoginProps) => {
  try {
    const response = await getRequest().put("/users", props);
    return response.data;
  } catch (e) {
    return false;
  }
};

export const getMyInfo = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const response = await getRequestWithAccessToken(token).get("/users");
      return response.data;
    }
    return false;
  } catch (e) {
    return false;
  }
};
