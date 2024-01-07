import axios from 'axios';

// const BASE_URL = process.env.NODE_ENV === "development" ?
//   "" : process.env.NEXT_PUBLIC_V2_BACK_URL;

const BASE_URL = process.env.NEXT_PUBLIC_V2_BACK_URL;

const getUrl = (path: string) => {
  if (process.env.NODE_ENV === "development") {
    return path;
  }
  return BASE_URL + path;
}


export const signinCodeSend = async (mobileNumber: FormDataEntryValue | null, code?: FormDataEntryValue | null) => {
  const url = getUrl("/api/login/send");
  const response = await axios.post(url, { mobileNumber: mobileNumber, code: "000000" });
  return response.data;
}


export const signinCodeVerify = async (mobileNumber: FormDataEntryValue | null, code?: FormDataEntryValue | null) => {
  const url = getUrl("/api/login/verify");
  const response = await axios.post(url, { mobileNumber: mobileNumber, code: code });
  return response.data;
}
