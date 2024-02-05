"use client";

import React from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { styled, Button } from "@mui/material";

import Header from "@/components/Header/CloseHeader";
import Loading from "@/components/loading";


const PhotoPage = () => {
  const router = useRouter();
  // const [isLoading, setIsLoading] = React.useState<boolean>(true);

  return (
    <>
      {/* {isLoading && <Loading />} */}
      <Header href="/myinfo" />
      <div>
        <CenterButton variant="contained" color="primary"
          // onClick={() => window.open(`https://g8h7y7g082m.typeform.com/to/mugQEFl6#user_id=${"userId"}`, '_blank')}
          onClick={() => window.location.reload()}
        >
          새로고침하기
        </CenterButton>
        <div
          data-tf-hidden={`user_id=${'userId'}`}
          data-tf-live="01HJ5N9S0QAEP7A02MJ27615QZ"
          style={{ height: "calc(100vh - 64px)" }}
        />
        <Script
          src="//embed.typeform.com/next/embed.js"
        />
      </div>
    </>
  );
}

const CenterButton = styled(Button)(({ theme }) => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%)",
  };
});

export default PhotoPage;
