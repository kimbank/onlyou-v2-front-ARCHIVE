import useSWRImmutable from 'swr/immutable';
import { authedFetcher } from '@/api/base/swrFetcher';


type UserDataTypes = 'lifestyle' | 'personality' | 'values' | 'appearance' | 'datingstyle' | 'etc' | 'letter' | 'photo' | 'all';

export const useMe = (type: UserDataTypes) => {
  const { data, isLoading, error, mutate } = useSWRImmutable(`/api/user/me/${type}`, authedFetcher);

  return {
    me: data?.data,
    isLoading: isLoading,
    isError: error,
    mutate: mutate,
  };
}

export default useMe;
