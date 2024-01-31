import useSWRImmutable from 'swr/immutable';
import { authedFetcher } from '@/api/base/swrFetcher';


export const useMatchingTargetDetails = (matchingId: string) => {
  const { data, isLoading, error, mutate } = useSWRImmutable(`/api/matching/details/${matchingId}`, authedFetcher);

  return {
    targetDetails: data,
    isLoading: isLoading,
    isError: error,
    mutate: mutate,
  };
}

export default useMatchingTargetDetails;
