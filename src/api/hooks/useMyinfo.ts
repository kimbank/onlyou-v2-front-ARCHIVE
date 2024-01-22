import useSWRImmutable from 'swr/immutable';
import useSWRMutation from 'swr/mutation';

import { authedFetcher } from '@/api/base/swrFetcher';


export const useMyinfo = () => {
  const { data, isLoading, error } = useSWRImmutable('/api/my_info', authedFetcher);
  const { trigger, isMutating, error: mutateError } = useSWRMutation('/api/my_info', authedFetcher);

  return {
    myInfo: data?.data,
    isLoading: isLoading,
    isError: error,
    mutate: trigger,
    isMutating: isMutating,
  };
}

export default useMyinfo;
