import useSWRImmutable from 'swr/immutable';
import { authedFetcher } from '@/api/base/swrFetcher';


export const useMatchingList = () => {
  const { data, isLoading, error, mutate } = useSWRImmutable('/api/matching/list', authedFetcher);

  return {
    matchingList: data?.data,
    isLoading: isLoading,
    isError: error,
    mutate: mutate,
  };
}

export default useMatchingList;
