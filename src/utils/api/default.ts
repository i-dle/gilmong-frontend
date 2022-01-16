import axios from "axios";

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: "http://54.180.147.25:8011",
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: "json" | "blob" | "text" = "json"
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: "http://54.180.147.25:8011",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: type,
  });
  return request;
};
