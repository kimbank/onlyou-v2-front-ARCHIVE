
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import fetcher from './axiosFetcher';

import { fetcherWithToken } from './fetcher';


const useAuthedSWR = (key: string) => {
  let token = "SAMPLE_TOKEN";
  // const { data, isLoading, error } = useSWRImmutable([key, token], ([url, token]) => fetcherWithToken(url, token));
  const { data, isLoading, error } = useSWRImmutable([key, token], fetcherWithToken);

  if (error) {
    console.error(error);
  }

  return {
    user: data,
    isLoading,
    error,
  };
}

export default useAuthedSWR;
