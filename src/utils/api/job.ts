import { getRequest, getRequestWithAccessToken } from "./default";

interface CreateJobProps {
  name: string;
  intro: string;
  branch: string;
}

export const createJob = async (props: CreateJobProps) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      await getRequestWithAccessToken(token).post("/jab", props);
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export const getJobListMain = async (props: string) => {
  try {
    const response = await getRequest().get(`/jabs/${props}`);
    return response.data;
  } catch (e) {
    return false;
  }
};

export const getJobList = async (props: string) => {
  try {
    const response = await getRequest().get(`/job-list/${props}`);
    return response.data;
  } catch (e) {
    return false;
  }
};

export const setInterested = async (props: string) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      await getRequestWithAccessToken(token).post(`/interest/${props}`);
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export const getInterest = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const response = await getRequestWithAccessToken(token).get("/interest");
      return response.data;
    }
    return false;
  } catch (e) {
    return false;
  }
};

type SortOption = "0" | "1" | "2";
interface SortPostProps {
  branch: string;
  sortoption: SortOption;
}

export const SortPost = async ({ sortoption = "0", branch }: SortPostProps) => {
  try {
    const response = await getRequest().get(`/jab/${branch}/${sortoption}`);
    return response.data;
  } catch (e) {
    return false;
  }
};

export const SearchJob = async (props: string) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const response = await getRequestWithAccessToken(token).get(
        `/jab/${props}`
      );
      return response.data;
    }
    return false;
  } catch (e) {
    return false;
  }
};
