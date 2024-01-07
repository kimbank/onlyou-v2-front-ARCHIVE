"use server";

import axios from "axios";
import { cookies } from "next/headers";

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_V2_BACK_URL,
  timeout: 5000,
});
console.log(process.env.NEXT_PUBLIC_V2_BACK_URL);
apiInstance.interceptors.request.use(
  (request) => {
    const accessToken = cookies().get("ONLYOU_TOKEN")?.value;
    console.log("ONLYOU_TOKEN:", accessToken);
    if (!accessToken) {
      return Promise.reject(new Error());
    }
    request.headers["Authorization"] = `Bearer ${accessToken}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;
