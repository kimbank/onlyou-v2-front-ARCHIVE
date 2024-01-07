"use client"

import CloseHeader from "@/components/Header/CloseHeader";
import HomeHeader from "@/components/Header/HomeHeader";
import ProgressHeader from "@/components/Header/ProgressHeader";
import WatermarkedImage from "@/components/WatermarkImage";

import useAuthedSWR from "@/hooks/swr/authedSWR";

import axios from "axios";


const PreviewPage = () => {
  const { user, error } = useAuthedSWR("/test/token");

  const handleCookie = async () => {
    // const res = await axios.get("https://test.onlyou.co.kr/test/cookies", {
    const res = await axios.get("/api/test/cookies", {
      withCredentials: true,
    });
    console.log(res);
  }

  const handleTest = async () => {
    // const res = await axios.get("https://test.onlyou.co.kr/test/token", {
    const res = await axios.get("/api/test/token", {
      withCredentials: true,
    });
    console.log(res);
  }

  return (
    <>
      <HomeHeader />
      <ProgressHeader href="/" progress={30} />

      <div>
        <h1>MyInfoPreview</h1>
        <button onClick={handleCookie}>cookie</button>
        <br />
        <button onClick={handleTest}>test</button>
      </div>
      <WatermarkedImage src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" watermarkText={"adsdasdasdasdasdasdadas"} />
    </>
  );
}

export default PreviewPage;
