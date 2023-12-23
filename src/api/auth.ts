import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === "development" ?
  "" : process.env.NEXT_PUBLIC_V2_BACK_URL;


export const signinCodeSend = async (mobileNumber: FormDataEntryValue | null, code: FormDataEntryValue | null) => {
  const url = BASE_URL + "/api/login/send";
  const response = await axios.post(url, { mobileNumber: mobileNumber, code: code });
  return response.data;
}


export const signinCodeVerify = async (mobileNumber: FormDataEntryValue | null, code: FormDataEntryValue | null) => {
  const url = BASE_URL + "/api/login/verify";
  const response = await axios.post(url, { mobileNumber: mobileNumber, code: code });
  return response.data;
}
