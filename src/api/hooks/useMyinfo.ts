import useSWRImmutable from 'swr/immutable';

import { authedFetcher } from '@/api/base/swrFetcher';


export const useMyinfo = () => {
  const { data, isLoading, error, mutate } = useSWRImmutable('/api/my_info', authedFetcher);

  return {
    myInfo: data?.data,
    isLoading: isLoading,
    isError: error,
    mutate: mutate,
  };
}

export default useMyinfo;
