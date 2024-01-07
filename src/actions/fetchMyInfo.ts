"use server";

import apiInstance from "@/api/useInterceptor";

export const fetchMyInfo = async () => {
  try {
    const response = await apiInstance.get("/api/my_info");
    return response.data;
  } catch (error) {
    console.error("error:", error);
    throw error;
  }
};
