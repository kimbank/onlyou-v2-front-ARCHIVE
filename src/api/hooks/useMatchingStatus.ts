import useSWR from "swr";
import { authedFetcher } from "@/api/base/swrFetcher";


export const useMatchingStatus = () => {
  const { data, isLoading, error, mutate } = useSWR(`/api/matching/status`, authedFetcher, {
    // onErrorRetry(error, key, config, revalidate, { retryCount }) {
    //   console.log("retryCount", retryCount)
    //   if (retryCount >= 4) return;
    //   setTimeout(() => revalidate({ retryCount }), 4000)
    // },
  });

  return {
    matchingStatus: data?.message,
    isLoading: isLoading,
    isError: error,
    mutate: mutate,
  };
}