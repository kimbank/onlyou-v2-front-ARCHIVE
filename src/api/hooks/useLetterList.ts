import useSWRImmutable from 'swr/immutable';
import { authedFetcher } from '@/api/base/swrFetcher';


export const useLetterList = () => {
  const { data, isLoading, error, mutate } = useSWRImmutable(`/api/user/letter`, authedFetcher);

  return {
    letterList: data?.data,
    isLoading: isLoading,
    isError: error,
    mutate: mutate,
  };
}

export default useLetterList;
