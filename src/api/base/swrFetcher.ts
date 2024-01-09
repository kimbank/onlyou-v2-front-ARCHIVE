import { plainInstance, authedInstance } from "./axisoInstance";


const IS_DEV = process.env.NODE_ENV === 'development';
const log = (message: string, url?: string): void => {
  if (IS_DEV) {
    console.log(`@@@@@@${message}${url ? " url: " + url : ''}`);
  }
}

export const fetcher = (url: string) => {
  log('plain_fetcher', url);
  return plainInstance.get(url).then((res) => res.data);
}

export const authedFetcher = (url: string) => {
  log('authed_fetcher', url);
  return authedInstance.get(url).then((res) => res.data);
}

export default authedFetcher;
