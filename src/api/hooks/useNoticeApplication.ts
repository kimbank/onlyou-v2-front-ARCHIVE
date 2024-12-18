import useSWRImmutable from 'swr/immutable';
import { authedFetcher } from '@/api/base/swrFetcher';


export const useMyinfo = () => {
  const { data, isLoading, error } = useSWRImmutable('/api/user/myinfo', authedFetcher);

  return {
    myInfo: data?.data,
    isLoading: isLoading,
    isError: error,
  };
}

export default useMyinfo;
