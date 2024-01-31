import { AxiosResponse } from 'axios';
import { authedAxios } from './base/axisoInstance';


export const putMatchingChoice = async (choice: boolean, matchingId: string): Promise<AxiosResponse> => {
  const path = `/api/matching/${choice}/${matchingId}`;
  const res =
    await authedAxios.put(path)
      .then(res => res)
      .catch(err => err.response);
  return res;
}
