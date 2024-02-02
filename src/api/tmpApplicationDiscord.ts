import { authedAxios } from './base/axisoInstance';


export const discordAlert = async (type: boolean) => {
  const path = "/api/matching/" + (type ? "start" : "end");
  try {
    await authedAxios.get(path);
  } catch (error) { }
}
