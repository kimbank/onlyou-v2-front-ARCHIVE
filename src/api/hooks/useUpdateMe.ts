import authedAxios from "../base/axisoInstance";

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
  const updateMe = async (type: UserDataTypes, updatedData: any) => {
    try {
      const response = await authedAxios.put(
        `/api/user/me/${type}`,
        updatedData
      );
      return response.data;
    } catch (error) {
      console.error("Update failed:", error);
      throw error;
    }
  };

  return {
    updateMe,
  };
};

export default useUpdateMe;
