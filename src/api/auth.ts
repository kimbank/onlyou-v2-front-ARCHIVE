import { plainAxios } from './base/axisoInstance';


export const signinCodeSend = async (mobileNumber: FormDataEntryValue | null, code?: FormDataEntryValue | null) => {
  const path = "/api/login/send";
  const res = await plainAxios.post(path, {
    mobileNumber: mobileNumber,
    code: "000000"
  }).then(res => res).catch(err => err.response);
  return res;
}


export const signinCodeVerify = async (mobileNumber: FormDataEntryValue | null, code?: FormDataEntryValue | null) => {
  const path = "/api/login/verify";
  const res = await plainAxios.post(path, {
    mobileNumber: mobileNumber,
    code: code
  }).then(res => res).catch(err => err.response);
  return res;
}
