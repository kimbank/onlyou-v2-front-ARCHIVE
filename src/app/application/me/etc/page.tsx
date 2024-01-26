"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { TipsAndUpdatesOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  styled,
} from "@mui/material";

import useMe from "@/api/hooks/useMe";
import BottomButton from "@/components/BottomButton/Next";
import { StepButton } from "@/components/Button/StepButton";
import { SubmitDrawer } from "@/components/Drawer/SubmitDrawer";
import { InfoBox } from "@/components/Notification/InfoBox/InfoBox";
import RDInput from "@/components/RDInput";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import useModal from "@/hooks/useModal";
import RadioOptions from "../RadioOptions";
import { informationBeforeMeeting } from "@/constants/application_option";
import { meCategories } from "@/constants/me";

interface EtcData {
  // fillStatus: number | null;
  nickname: string | null;
  informationBeforeMeeting: number | null;
  kakaoId: string | null;
}

const Etc = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [kakaoId, setKakaoId] = useState("");
  const searchParams = useSearchParams();
  const [etcData, setEtcData] = useState<EtcData>({
    nickname: null,
    informationBeforeMeeting: null,
    kakaoId: null,
  });

  const type = searchParams.get("type");

  const { label, name, options } = informationBeforeMeeting;

  const handleKakaoIdChange = (event: any) => {
    setKakaoId(event.target.value);
  };

  const { me, isLoading, isError } = useMe("etc");
  const informationBeforeMeetingValue = me ? me.informationBeforeMeeting : null;
  const handleRadioChange = (value: string) => {
    setEtcData({
      ...etcData,
      [name]: Number(value),
    });
  };

  useEffect(() => {
    if (!isLoading && !isError) {
      const etcDataToUpdate = me || {};

      const updatedEtcData: EtcData = Object.keys(etcDataToUpdate).reduce(
        (result, key) => {
          if (etcDataToUpdate[key] !== null) {
            result[key as keyof EtcData] = etcDataToUpdate[key];
          }
          return result;
        },
        { ...etcData } as EtcData
      );

      setEtcData(updatedEtcData);
    }
  }, [me, isLoading, isError]);

  const allGroupsSelected =
    etcData.informationBeforeMeeting !== null &&
    etcData.kakaoId &&
    etcData.kakaoId.trim() !== ""
      ? true
      : undefined;

  return (
    <>
      <EtcRoot id="content">
        <Box className="title-box">
          <Typography variant="subtitle2">
            <strong>6</strong>
            <span style={{ color: "#5C5F63" }}>/6</span>
          </Typography>
          <Typography variant="h1">기타 정보 입력하기</Typography>
        </Box>
        <Container className="other-radio">
          <Typography variant="subtitle2">{label}</Typography>
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
      </EtcRoot>

      <SubmitDrawer
        nextHref="/application/targeting?type=init"
        open={isModalOpen}
        onClose={closeModal}
      />
      {type === "init" ? (
        <StepButton
          prevText="이전"
          nextText="다음"
          prevHref="appearance/"
          onClick={openModal}
          nextType="button"
          checkedStates={allGroupsSelected}
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
