import axios from "axios";

const fetcher = (url: string) => {
  if (process.env.NODE_ENV === "development") {
    console.log("@@@@@@ fetcher url:", url);
  }
  let absoluteUrl = url;

  if (process.env.NODE_ENV === "development") {
    const absoluteUrl = process.env.NEXT_PUBLIC_V2_BACK_URL + url;
  }

  return axios.get(absoluteUrl, { withCredentials: true }).then((res) => res.data);
}

export default fetcher;
