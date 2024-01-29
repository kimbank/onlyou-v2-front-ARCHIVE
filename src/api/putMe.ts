import { AxiosResponse } from 'axios';
import { authedAxios } from './base/axisoInstance';


type UserDataTypes = 'lifestyle' | 'personality' | 'values' | 'appearance' | 'datingstyle' | 'etc' | 'letter' | 'photo';

export const putMe = async (type: UserDataTypes, data: any): Promise<AxiosResponse> => {
  const path = `/api/user/me/${type}`;
  const res = await authedAxios.put(path, {
    ...data,
  }).then(res => res).catch(err => err.response);
  return res;
}

export default putMe;
