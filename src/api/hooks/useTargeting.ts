import useSWRImmutable from 'swr/immutable';
import { authedFetcher } from '@/api/base/swrFetcher';


export const useTargeting = () => {
  const { data, isLoading, error } = useSWRImmutable('/api/targeting', authedFetcher);

  return {
    targetingData: data?.data,
    isLoading: isLoading,
    isError: error,
  };
}

export default useTargeting;
