import { authedAxios } from './base/axisoInstance';


export const switchDormancy = async (dormancy: boolean) => {
  const path = "/api/user/dormant/" + dormancy;
  const res = await authedAxios.patch(path);
  return res.data;
}
