import useSWRImmutable from 'swr/immutable';
import { authedFetcher } from '@/api/base/swrFetcher';


export const useAgreementList = () => {
  const { data, isLoading, error, mutate } = useSWRImmutable('/api/agreement/list', authedFetcher);

  return {
    agreementList: data?.agreementList,
    isLoading: isLoading,
    isError: error,
    mutate: mutate,
  };
}

export default useAgreementList;
