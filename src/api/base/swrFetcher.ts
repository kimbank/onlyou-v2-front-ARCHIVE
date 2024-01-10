import { plainAxios, authedAxios } from "./axisoInstance";


const IS_DEV = process.env.NODE_ENV === 'development';
const log = (message: string, path?: string): void => {
  if (IS_DEV) {
    console.log(`@@@@@@${message}${path ? " path: " + path : ''}`);
  }
}

export const plainFetcher = (path: string) => {
  log('plain_fetcher', path);
  return plainAxios.get(path).then((res) => res.data);
}

export const authedFetcher = (path: string) => {
  log('authed_fetcher', path);
  return authedAxios.get(path).then((res) => res.data);
}

export default authedFetcher;
