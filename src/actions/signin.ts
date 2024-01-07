"use server";

import axios from "axios";
import { cookies } from "next/headers";

// const BASE_URL = process.env.NODE_ENV === "development" ?
//   "" : process.env.NEXT_PUBLIC_V2_BACK_URL;

const BASE_URL = process.env.NEXT_PUBLIC_V2_BACK_URL;

export const signinCodeSend = async (
  mobileNumber: FormDataEntryValue | null
) => {
  const url = BASE_URL + "/api/login/send";
  try {
    const response = await axios.post(url, {
      mobileNumber: mobileNumber,
      code: "000000",
    });
    console.log("response.data", response.data);
    return response.data;
  } catch (error: any) {
    console.log("error.response.data", error.response.data);
    return error.response.data;
  }
};

export const signinCodeVerify = async (
  mobileNumber: FormDataEntryValue | null,
  code: FormDataEntryValue | null
) => {
  const url = BASE_URL + "/api/login/verify";
  const response = await axios.post(url, {
    mobileNumber: mobileNumber,
    code: code,
  });

  try {
    const { accessToken, refreshToken } = response.data.token;
    cookies().set({ name: "ONLYOU_TOKEN", value: accessToken, httpOnly: true });
    cookies().set({
      name: "ONLYOU_REFRESH_TOKEN",
      value: refreshToken,
      httpOnly: true,
    });
    console.log("Access Token:", accessToken);
    console.log("Refresh Token:", refreshToken);
  } catch (error) {}

  return response.data;
};
