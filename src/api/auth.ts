import { plainAxios } from './base/axisoInstance';


export const signinCodeSend = async (mobileNumber: FormDataEntryValue | null, code?: FormDataEntryValue | null) => {
  const path = "/api/login/send";
  const res = await plainAxios.post(path, {
    mobileNumber: mobileNumber,
    code: "000000"
  });
  return res.data;
}


export const signinCodeVerify = async (mobileNumber: FormDataEntryValue | null, code?: FormDataEntryValue | null) => {
  const path = "/api/login/verify";
  const res = await plainAxios.post(path, {
    mobileNumber: mobileNumber,
    code: code
  });
  return res.data;
}
