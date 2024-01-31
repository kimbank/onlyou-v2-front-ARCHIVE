import useSWRImmutable from 'swr/immutable';
import { authedFetcher } from '@/api/base/swrFetcher';


export const useAgreementTargetDetails = (agreementId: string) => {
  const { data, isLoading, error, mutate } = useSWRImmutable(`/api/agreement/details/${agreementId}`, authedFetcher);

  return {
    targetDetails: data,
    isLoading: isLoading,
    isError: error,
    mutate: mutate,
  };
}

export default useAgreementTargetDetails;
