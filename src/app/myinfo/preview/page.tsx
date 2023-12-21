"use client"

import CloseHeader from "@/comp/Header/CloseHeader";
import HomeHeader from "@/comp/Header/HomeHeader";
import ProgressHeader from "@/comp/Header/ProgressHeader";
import WatermarkedImage from "@/comp/WatermarkImage";


const MyInfoPreview = () => {
  return (
    <>
      {/* <CloseHeader href="/" /> */}
      {/* <HomeHeader /> */}
      <ProgressHeader href="/" progress={30} />

      <div>
        <h1>MyInfoPreview</h1>
      </div>
      <WatermarkedImage src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" watermarkText={"adsdasdasdasdasdasdadas"} />
    </>
  );
}

export default MyInfoPreview;
