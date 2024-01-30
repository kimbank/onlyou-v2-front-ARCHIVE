"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useAgreementList } from "@/api/hooks/useAgreementList";

import { styled, Box } from "@mui/material";

import BottomNavi from "@/components/BottomNavi";
import HomeHeader from "@/components/Header/HomeHeader";

import { useDispatch } from "react-redux";
import { showModal, closeModal } from "@/store/home/modalSlice"

import Loading from "@/components/loading";


const AgreementNotfound = dynamic(() => import("./AgreementNotfound"), { ssr: false, loading: () => <Loading />});
const AgreementExist = dynamic(() => import("./AgreementExist"), { ssr: false, loading: () => <Loading />});


const AgreementPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { agreementList, isLoading, isError } = useAgreementList();

  let Page = AgreementNotfound;

  if (agreementList?.length > 0) {
    Page = AgreementExist;
  }

  if (isError) {
    dispatch(
      showModal({
        title: "서버 에러",
        body: "잠시 후 다시 시도해주세요.",
        cancel: "로그아웃",
        complete: "새로고침",
        onCancel: () => router.push("/signout"),
        onComplete: () => window.location.reload(),
      })
    );
  } else {
    dispatch(closeModal());
  }

  return (
    <>
      <HomeHeader />
      <AgreemenRoot id="content">
        {
          isLoading || isError ? (
            <Loading />
          ) : (
            <>
              {Page && <Page />}
            </>
          )
        }
      </AgreemenRoot>
      <BottomNavi />
    </>
  );
}

const AgreemenRoot = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  };
});

export default AgreementPage;
