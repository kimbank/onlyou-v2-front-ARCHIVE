"use server"

import { cookies } from "next/headers";

import axios from "axios";

const fetcher = (url: string) => {
  if (process.env.NODE_ENV === "development") {
    console.log("@@@@@@ fetcher url:", url);
  }
  let absoluteUrl = url;

  // if (process.env.NODE_ENV === "production") {
    absoluteUrl = process.env.NEXT_PUBLIC_V2_BACK_URL + url;
  // }
  cookies().get("token");

  return axios.get(absoluteUrl, { withCredentials: true }).then((res) => res.data);
}

export default fetcher;
