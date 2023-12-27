"use server"

import { cookies, headers } from "next/headers";
import axios from "axios";

export async function get() {
  const res = await fetch("https://test.onlyou.co.kr/api/my_info", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + cookies().get("aceess")?.value
    }
  })
  .then(res => res.json())
  // .then(data => data)
  // const res = await axios.get("https://test.onlyou.co.kr/test", {
  //   headers: {
  //     Authorization: "Bearer " + cookies().get("refresh")?.value
  //   }
  // });
  console.log("@@@@ access:", cookies().get("access"));
  console.log("@@@@ res:", res);

  return res;
}