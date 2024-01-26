import { AxiosResponse } from 'axios';
import { authedAxios } from './base/axisoInstance';


export const putTargeting = async (targetingData: any): Promise<AxiosResponse> => {
  const path = "/api/targeting";
  const res = await authedAxios.put(path, {
    ...targetingData
  }).then(res => res).catch(err => err.response);
  return res;
}
