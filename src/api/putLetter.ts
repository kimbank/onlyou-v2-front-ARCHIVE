import { AxiosResponse } from 'axios';
import { authedAxios } from './base/axisoInstance';


export const putLetter = async (letterList: any): Promise<AxiosResponse> => {
  const path = `/api/user/letter`;
  const res = await authedAxios.put(path,
    letterList
  ).then(res => res).catch(err => err.response);
  return res;
}

export default putLetter;
