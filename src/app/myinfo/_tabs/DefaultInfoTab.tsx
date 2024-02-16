"use client";

import React from "react";
import {
  styled,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { showModal } from "@/store/home/modalSlice";

import { useMyinfo } from "@/api/hooks/useMyinfo";
import { getDetailOptionLabel } from "@/constants/matching";
import { allOptions, getSidoByResidence } from "@/constants/matching";

import BottomButton from "./BottomButton";
import IOSSwitch from "@/components/Toggle/iOS";
import OptionsList from "./OptionsList";
import { FullDivider } from "@/components/Dividers/FullDivider";
import Loading from "@/components/loading";


interface DefaultInfoData {
  marriageValues: number | null;
  oppositeSexFriendValues: number | null;
  politicalValues: number | null;
  consumptionValues: number | null;
  careerFamilyValues: number | null;
  childrenValues: number | null;
}

interface DefaultInfoTabProps {
  data: DefaultInfoData;
  setData: React.Dispatch<React.SetStateAction<DefaultInfoData>> | any;
  onClose: () => Promise<boolean>;
}

export const DefaultInfoTab = ({ data, setData, onClose }: DefaultInfoTabProps) => {
  const dispatch = useDispatch();
  const [initialData, setInitalData] = React.useState(data); // 초기 데이터 저장
  const [isDataModified, setIsDataModified] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const { myInfo, isLoading, isError } = useMyinfo();

  React.useEffect(() => {
    const dataChanged = JSON.stringify(data) !== JSON.stringify(initialData);
    setIsDataModified(dataChanged);
  }, [data, initialData]);

  const handleSubmit = async () => {
    dispatch(
      showModal({
        title: "기본 정보 수정 및 저장 기능이 곧 추가될 예정이에요.",
        // body: "",
        complete: "확인",
      })
    )

    // setLoading(true);
    // const res = await onClose();
    // if (res) {
    //   setInitalData(data);
    // }
    // setLoading(false);
  };

  return (
    <>
      {loading && <Loading />}

      <DefaultInfoTabRoot>
        <EditableDetailInfoCard>
          <Typography variant="subtitle2">
            1. 거주지
          </Typography>
          <SelectBox>
            <Typography variant="body2" sx={{ color: "gray" }}>
              시/도
            </Typography>
            <Select
              value={getSidoByResidence(myInfo?.residence)}
              size="small"
              disabled
            >
              {Object.keys(allOptions.residenceSido).map((key, index) => (
                <MenuItem key={index} value={key}>{allOptions.residenceSido[key]}</MenuItem>
              ))}
            </Select>
          </SelectBox>
          <SelectBox>
            <Typography variant="body2" sx={{ color: "gray" }}>
              시/군/구
            </Typography>
            <Select
              value={myInfo?.residence}
              size="small"
              disabled
            >
              {Object.keys(allOptions.residence).map((key, index) => {
                return (
                  <MenuItem key={index} value={key}>{allOptions.residence[key]}</MenuItem>
                );
              })}
            </Select>
          </SelectBox>
        </EditableDetailInfoCard>

        <EditableDetailInfoCard>
        <Typography variant="subtitle2">
          2. 연봉
        </Typography>
        <SelectBox>
          <Select
            value={myInfo?.salary}
            size="small"
            disabled
          >
            {Object.keys(allOptions.salary).map((key, index) => (
              <MenuItem key={index} value={key}>{allOptions.salary[key]}</MenuItem>
            ))}
          </Select>
        </SelectBox>
        </EditableDetailInfoCard>

        <EditableDetailInfoCard>
          <Typography variant="subtitle2">
            3. 대학명 공개
          </Typography>
          <IOSToggleBox>
            <Typography variant="body1" color="ActiveBorder">
              상대방에게 나의 대학 명이 공개되어요.
            </Typography>
            <IOSSwitch disabled />
          </IOSToggleBox>
        </EditableDetailInfoCard>

        <EditableDetailInfoCard>
          <Typography variant="subtitle2">
            4. 직장명 공개
          </Typography>
          <IOSToggleBox>
            <Typography variant="body1" color="ActiveBorder">
              상대방에게 나의 직장 명이 공개되어요.
            </Typography>
            <IOSSwitch disabled />
          </IOSToggleBox>
        </EditableDetailInfoCard>

        <FullDivider />

        <Typography variant="body2">
          *아래의 <strong>닉네임, 생년월일, 직장유형, 직장 명, 직업, 최종 학력, 대학, 대학명, 돌싱 여부</strong>는 임의로 변경 불가능합니다.<br/>
          문의 후 관리자 승인을 통해 변경하시길 바랍니다.
          [내정보 - 1:1문의]
        </Typography>
        <DetailInfoCard>
          <Typography variant="subtitle2">
            닉네임
          </Typography>
          { myInfo?.nickname || "error" }
        </DetailInfoCard>
        <DetailInfoCard>
          <Typography variant="subtitle2">
            생년월일
          </Typography>
          { myInfo?.birthYear || "error" }년생
        </DetailInfoCard>
        <DetailInfoCard>
          <Typography variant="subtitle2">
            직장 유형
          </Typography>
          { getDetailOptionLabel("jobType", myInfo?.jobType) }
        </DetailInfoCard>
        <DetailInfoCard>
          <Typography variant="subtitle2">
            직장 명
          </Typography>
          { myInfo?.jobName || "error" }
        </DetailInfoCard>
        <DetailInfoCard>
          <Typography variant="subtitle2">
            직업
          </Typography>
          { myInfo?.jobGroup || "error" }
        </DetailInfoCard>
        <DetailInfoCard>
          <Typography variant="subtitle2">
            최종 학력
          </Typography>
          { getDetailOptionLabel("education", myInfo?.education) }
        </DetailInfoCard>
        <DetailInfoCard>
          <Typography variant="subtitle2">
            대학 명
          </Typography>
          { myInfo?.universityName || "error" }
        </DetailInfoCard>
        <DetailInfoCard>
          <Typography variant="subtitle2">
            결혼 경력
          </Typography>
          { getDetailOptionLabel("divorce", Number(myInfo?.divorce)) }
        </DetailInfoCard>
      </DefaultInfoTabRoot>

      <BottomButton
        saveText="저장하기"
        // isSaveDisabled={!isDataModified}
        onClose={() => handleSubmit()}
      />
    </>
  );
};

const DefaultInfoTabRoot = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const DetailInfoCard = styled("div")(({ theme }) => {
  return {
    backgroundColor: String(theme.palette.gray5),
    padding: "12px 20px",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  };
});

const EditableDetailInfoCard = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SelectBox = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const IOSToggleBox = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export default DefaultInfoTab;
