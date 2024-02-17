import { AxiosResponse } from 'axios';
import { authedAxios } from './base/axisoInstance';


export const putMyinfoDefault = async (myinfoDefaultData: any): Promise<AxiosResponse> => {
  const path = "/api/user/myinfo/default";
  const res = await authedAxios.put(path, {
    ...myinfoDefaultData
  }).then(res => res).catch(err => err.response);
  return res;
}

export default putMyinfoDefault;
