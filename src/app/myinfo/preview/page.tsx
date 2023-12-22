"use client"

import CloseHeader from "@/components/Header/CloseHeader";
import HomeHeader from "@/components/Header/HomeHeader";
import ProgressHeader from "@/components/Header/ProgressHeader";
import WatermarkedImage from "@/components/WatermarkImage";


const PreviewPage = () => {
  return (
    <>
      <HomeHeader />
      <ProgressHeader href="/" progress={30} />

      <div>
        <h1>MyInfoPreview</h1>
      </div>
      <WatermarkedImage src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" watermarkText={"adsdasdasdasdasdasdadas"} />
    </>
  );
}

export default PreviewPage;
