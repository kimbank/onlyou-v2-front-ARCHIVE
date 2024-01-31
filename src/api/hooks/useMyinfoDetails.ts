import useSWRImmutable from 'swr/immutable';
import { authedFetcher } from '@/api/base/swrFetcher';


export const useMyinfoDetails = () => {
  const { data, isLoading, error, mutate } = useSWRImmutable('/api/user/myinfo/details', authedFetcher);

  return {
    myinfoDetailsData: data,
    isLoading: isLoading,
    isError: error,
    mutate: mutate,
  };
}

export default useMyinfoDetails;
