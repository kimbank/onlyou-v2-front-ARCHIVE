"use client"

import { useRouter } from "next/router";

const Letter = () => {
  const router = useRouter();

  router.push("/application/letter/select");

  return (
    <div>
    </div>
  )
}

export default Letter;
