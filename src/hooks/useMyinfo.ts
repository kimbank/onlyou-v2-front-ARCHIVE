import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import fetcher from './swr/axiosFetcher';


export const useMyinfo = () => {
  const { data, isLoading, error } = useSWRImmutable('/api/my_info', fetcher);

  return {
    myInfo: data,
    isLoading: isLoading,
    isError: error,
  };
}

export default useMyinfo;
