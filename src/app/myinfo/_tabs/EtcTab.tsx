"use client";

import React from "react";
import {
  styled,
  Box,
  Typography,
} from "@mui/material";

import RDInput from "@/components/RDInput";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import BottomButton from "./BottomButton";
import { informationBeforeMeeting } from "@/constants/application_option";

import { useDispatch } from "react-redux";
import { showModal } from "@/store/home/modalSlice";

import Loading from "@/components/loading";


interface EtcData {
  kakaoId: string | null;
  informationBeforeMeeting: number | null;
}

interface EtcTabProps {
  data: EtcData;
  setData: React.Dispatch<React.SetStateAction<EtcData>> | any;
  onClose: () => Promise<boolean>;
}

export const EtcTab = ({ data, setData, onClose }: EtcTabProps) => {
  const dispatch = useDispatch();
  const [initialData, setInitalData] = React.useState(data); // 초기 데이터 저장
  const [isDataModified, setIsDataModified] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { label: IBMlabel, name: IBMname, options: IBMoptions } = informationBeforeMeeting;
  const informationBeforeMeetingValue = data.informationBeforeMeeting;

  React.useEffect(() => {
    const dataChanged = JSON.stringify(data) !== JSON.stringify(initialData);
    setIsDataModified(dataChanged);
  }, [data, initialData]);

  const handleSubmit = async () => {
    if (!/^[A-Za-z0-9_.-]{4,20}$/.test(data.kakaoId || "")) {
      dispatch(
        showModal({
          title: "카카오톡 아이디 형식이 올바르지 않아요.",
          body: "영문, 숫자, 특수문자 빼기(-), 밑줄(_), 마침표(.)를 포함하여 4~20자만 사용 가능해요.",
          complete: "확인",
        })
      );
      return;
    }
    setLoading(true);
    const res = await onClose();
    if (res) {
      setInitalData(data);
    }
    setLoading(false);
  }

  const handleRadioChange = (value: string) => {
    setData({
      ...data,
      [IBMname]: Number(value),
    });
  };

  const handleKakaoIdChange = (event: any) => {
    setData({
      ...data,
      ['kakaoId']: event.target.value === "" ? null : event.target.value,
    });
  };

  return (
    <>
      {loading && <Loading />}
      <OptionsListRoot>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="subtitle2">{ "만나기 전 연락은 어땠으면 하시나요?" || IBMlabel }</Typography>
          <RDRadioInput
            options={Object.keys(IBMoptions).map((optionIndex) => ({
              value: optionIndex,
              label: IBMoptions[optionIndex],
            }))}
            onChange={handleRadioChange}
            initialValue={
              informationBeforeMeetingValue !== null
                ? informationBeforeMeetingValue.toString()
                : ""
            }
          />
        </Box>
        <RDInput
          label="카카오톡 아이디"
          placeholder="카카오톡 아이디를 입력해주세요"
          value={data.kakaoId || ""}
          onChange={handleKakaoIdChange}
        />
      </OptionsListRoot>
      <BottomButton
        saveText="저장하기"
        isSaveDisabled={!isDataModified}
        onClose={() => handleSubmit()}
      />
    </>
  );
};

const OptionsListRoot = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export default EtcTab;
