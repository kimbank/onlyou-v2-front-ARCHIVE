import useSWR from "swr";
import axios from "axios";
import { authedFetcher } from "@/api/base/swrFetcher";

type UserDataTypes =
  | "lifestyle"
  | "personality"
  | "values"
  | "appearance"
  | "datingstyle"
  | "etc"
  | "letter"
  | "photo";

const useUpdateMe = () => {
  const { data, error, mutate } = useSWR("/api/user/me", authedFetcher);

  const updateMe = async (type: UserDataTypes, updatedData: any) => {
    try {
      const response = await axios.put(`/api/user/me/${type}`, updatedData);
      mutate();
      return response.data;
    } catch (error) {
      console.error("Update failed:", error);
      throw error;
    }
  };

  return {
    me: data,
    isLoading: !error && !data,
    isError: error,
    updateMe,
  };
};

export default useUpdateMe;
