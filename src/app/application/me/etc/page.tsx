"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { TipsAndUpdatesOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  styled,
} from "@mui/material";

import BottomButton from "@/components/BottomButton/Next";
import { StepButton } from "@/components/Button/StepButton";
import { SubmitDrawer } from "@/components/Drawer/SubmitDrawer";
import { InfoBox } from "@/components/Notification/InfoBox/InfoBox";
import RDInput from "@/components/RDInput";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import useModal from "@/hooks/useModal";
import { informationBeforeMeeting } from "@/constants/application_option";

import { useDispatch } from "react-redux";
import { showModal } from "@/store/home/modalSlice";

import useMe from "@/api/hooks/useMe";
import putMe from "@/api/putMe";
import Loading from "@/components/loading";

interface EtcData {
  // nickname: string | null;
  informationBeforeMeeting: number | null;
  kakaoId: string | null;
}

const Etc = () => {
  const searchParams = useSearchParams();
  const isInit = searchParams.get("type") === "init";
  const { me, isLoading, isError, mutate } = useMe("etc");
  const [isPutMeLoading, setIsPutMeLoading] = React.useState<boolean>(false);
  const [etcData, setEtcData] = React.useState<EtcData>({
    // nickname: null,
    informationBeforeMeeting: null,
    kakaoId: null,
  });
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();
  const { label, name, options } = informationBeforeMeeting;
  const [kakaoId, setKakaoId] = React.useState("");
  const informationBeforeMeetingValue = me ? me.informationBeforeMeeting : null;
  const isCompleteFillData = Object.values(etcData).every(
    (value) => value !== null && value !== ""
  );

  React.useEffect(() => {
    if (isLoading || isError) return;

    try {
      const etc = me || {};
      const etcDataKeys = Object.keys(etcData);
      Object.keys(etc).map((key) => {
        if (etcDataKeys.includes(key)) {
          setEtcData((prev) => ({
            ...prev,
            [key]: etc[key as keyof EtcData],
          }));
        }
      });
      setKakaoId(etc.kakaoId || "");
    } catch (error) {
      return;
    }
  }, [me, isLoading, isError]);

  const handleRadioChange = (value: string) => {
    setEtcData({
      ...etcData,
      [name]: Number(value),
    });
  };

  const handleKakaoIdChange = (event: any) => {
    setKakaoId(event.target.value);
    setEtcData((prev) => ({
      ...prev,
      kakaoId: event.target.value === "" ? null : event.target.value,
    }));
  };

  async function handleNext() {
    if (!/^[A-Za-z0-9_.-]{4,20}$/.test(kakaoId)) {
      dispatch(
        showModal({
          title: "카카오톡 아이디 형식이 올바르지 않아요.",
          body: "영문, 숫자, 특수문자 빼기(-), 밑줄(_), 마침표(.)를 포함하여 4~20자만 사용 가능해요.",
          complete: "확인",
        })
      );
      return;
    }
    setIsPutMeLoading(true);
    const res = await putMe("etc", etcData);

    if (res.status >= 200 && res.status < 300) {
      mutate();
      setIsPutMeLoading(false);
    } else {
      alert("저장에 실패했습니다. 관리자에게 문의해주세요.");
      setIsPutMeLoading(false);
      return;
    }

    if (isInit) {
      openModal();
    }
  }

  // async function handlePrev() {
  //   if (isInit) {
  //     router.push("/matching");
  //   }
  // }

  return (
    <>
      {isLoading && <Loading />}
      <EtcRoot id="content">
        <Box className="title-box">
          <Typography variant="subtitle2">
            <strong>6</strong>
            <span style={{ color: "#5C5F63" }}>/6</span>
          </Typography>
          <Typography variant="h1">기타 정보 입력하기</Typography>
        </Box>
        <Container className="other-radio">
          <Typography variant="subtitle2">{ "만나기 전 연락은 어땠으면 하시나요?" || label}</Typography>
          <RDRadioInput
            options={Object.keys(options).map((optionIndex) => ({
              value: optionIndex,
              label: options[optionIndex],
            }))}
            onChange={handleRadioChange}
            initialValue={
              informationBeforeMeetingValue !== null
                ? informationBeforeMeetingValue.toString()
                : ""
            }
          />
        </Container>

        <Box className="kakao-box">
          <RDInput
            label="카카오톡 아이디"
            placeholder="카카오톡 아이디를 입력해주세요"
            value={etcData.kakaoId || ""}
            onChange={handleKakaoIdChange}
          />
          <Typography variant="body2">
            *매칭 성사 시, 카카오톡 아이디가 교환되어요.
            <br />꼭 카카오톡에서 카카오톡 아이디를 ‘검색 허용’으로 설정해
            주세요.
          </Typography>

          <InfoBox
            align="left"
            textAlign="left"
            marginB="none"
            bgColor="primary"
          >
            <Box className="info-box">
              <TipsAndUpdatesOutlined className="info-icon" />
              <Typography variant="subtitle2">카카오톡 아이디 찾기</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2">
              카카오톡 실행 &gt; 더보기 &gt; 설정 &gt; 프로필관리 &gt; 카카오톡
              ID
            </Typography>
          </InfoBox>
          <InfoBox
            align="left"
            textAlign="left"
            marginB="none"
            bgColor="secondary"
          >
            <Box className="info-box">
              <TipsAndUpdatesOutlined className="info-icon" />
              <Typography variant="subtitle2">
                카카오톡 검색 허용하기
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2">
              카카오톡 실행 &gt; 더보기 &gt; 설정 &gt; 프로필관리 &gt; 카카오톡
              ID
              <br />
              &gt; ID 검색 허용
            </Typography>
          </InfoBox>
        </Box>
        <br />
      </EtcRoot>

      <SubmitDrawer
        nextHref="/application/targeting?type=init"
        open={isModalOpen}
        onClose={closeModal}
      />
      {isInit ? (
        <StepButton
          prevText="이전"
          nextText="다음"
          prevHref="appearance/"
          onClick={handleNext}
          nextType="button"
          checkedStates={isCompleteFillData}
          tips
        />
      ) : (
        <BottomButton>
          <Button variant="contained" size="large">
            저장하기
          </Button>
        </BottomButton>
      )}
    </>
  );
};

export default Etc;

const EtcRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  paddingBottom: "166px !important",
  ".title-box": {
    gap: "0px",
  },
  ".other-radio": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "0",
    gap: "12px",
    margin: 0,
  },
  ".kakao-box": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  ".info-box": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: "8px",
  },
});
