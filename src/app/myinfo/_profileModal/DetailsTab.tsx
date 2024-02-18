import { FullDivider } from "@/components/Dividers/FullDivider";
import { Box, Chip, styled, Typography } from "@mui/material";
import Image from "next/image";
import BirthIcon from "public/icons/birth.svg";
import HomeIcon from "public/icons/home.svg";
import JobIcon from "public/icons/job.svg";

import { getDetailsNameLabel, getDetailOptionLabel } from "@/constants/matching";


export const DetailsTab = ({ targetDetails }: any) => {
  if (!targetDetails) {
    return null;
  }

  const filteredArray = Object.entries(targetDetails).filter(([key, value]: [string, any]) => {
    const targetPriority = value?.priority;
    return targetPriority !== null && targetPriority !== undefined && targetPriority >= 1 && targetPriority <= 3;
  });
  const firstPriority = filteredArray.reduce<any[]>((acc: any[], [key, value]: [string, any]) => {
    const targetPriority = Number(value?.priority);
    const name = key;
    const type = Array.isArray(value?.data) ? "chips" : "card";
    const data = type === "chips" ? value?.data : Number(value?.data);
    if (targetPriority === 1) {
      acc.push({ name, type, data, priority: targetPriority });
    }
    return acc;
  }, []);
  const secondPriority = filteredArray.reduce<any[]>((acc: any[], [key, value]: [string, any]) => {
    const targetPriority = Number(value?.priority);
    const name = key;
    const type = Array.isArray(value?.data) ? "chips" : "card";
    const data = type === "chips" ? value?.data : Number(value?.data);
    if (targetPriority === 2) {
      acc.push({ name, type, data, priority: targetPriority });
    }
    return acc;
  }, []);
  const thirdPriority = filteredArray.reduce<any[]>((acc: any[], [key, value]: [string, any]) => {
    const targetPriority = Number(value?.priority);
    const name = key;
    const type = Array.isArray(value?.data) ? "chips" : "card";
    const data = type === "chips" ? value?.data : Number(value?.data);
    if (targetPriority === 3) {
      acc.push({ name, type, data, priority: targetPriority });
    }
    return acc;
  }, []);

  return (
    <DetailsTabRoot>
      <span className="default-box">
        <span className="profile-box">
          <Typography variant="body2" color="gray2">
            *내가 설정한 1-3순위 조건만 프로필에 보여집니다.
          </Typography>
          <Box className="profile-card">
            <Box className="profile-card-item">
              <Image src={JobIcon} alt="job" width={20} height={20} />
              <Typography variant="body2">{targetDetails?.jobGroup}</Typography>
            </Box>
            <Box className="profile-card-item">
              <Image src={HomeIcon} alt="home" width={20} height={20} />
              <Typography variant="body2">{getDetailOptionLabel("residence",targetDetails?.residence)}</Typography>
            </Box>
            <Box className="profile-card-item">
              <Image src={BirthIcon} alt="birth" width={20} height={20} />
              <Typography variant="body2">{targetDetails?.birthYear}년생</Typography>
            </Box>
          </Box>
        </span>
        <span className="profile-box">
          <span className="default-item">
            <Typography variant="subtitle2">
              관심사
            </Typography>
            <Box className="details-card-chips">
              {targetDetails?.interest ?
                targetDetails?.interest?.map((data: number, index: number) => (
                  <Chip key={index} label={getDetailOptionLabel("interest", data)} color="secondary" />
                )) :
                <i>항목 작성 전입니다</i>
              }
            </Box>
          </span>
          <span className="default-item">
            <Typography variant="subtitle2">
              내적 매력
            </Typography>
            <Box className="details-card-chips">
              {targetDetails?.personalityCharm ?
                targetDetails?.personalityCharm?.map((data: number, index: number) => (
                  <Chip key={index} label={getDetailOptionLabel("personalityCharm", data)} color="secondary" />
                )) :
                <i>항목 작성 전입니다</i>
              }
            </Box>
          </span>
          <span className="default-item">
            <Typography variant="subtitle2">
              외적 매력
            </Typography>
            <Box className="details-card-chips">
              {Array.isArray(targetDetails?.externalCharm) ?
                targetDetails?.externalCharm?.map((data: number, index: number) => (
                  <Chip key={index} label={getDetailOptionLabel("externalCharm", data)} color="secondary" />
                ))
                :
                <i>항목 작성 전입니다.</i>
                // <Chip label="불러오는 중 문제가 발생했습니다." color="secondary" />
              }
            </Box>
          </span>
          <span className="default-item">
            <Typography variant="subtitle2">
              만나기 전 정보
            </Typography>
            {targetDetails?.informationBeforeMeeting ?
              typeof targetDetails?.informationBeforeMeeting === "number" &&
              <Box className="details-card-chips">
                <Chip
                  label={getDetailOptionLabel("informationBeforeMeeting",targetDetails?.informationBeforeMeeting)}
                  color="secondary"
                />
              </Box>
              :
              <i>항목 작성 전입니다</i>
            }
          </span>
        </span>
      </span>

      <FullDivider />

      <span className="default-box">
        {firstPriority.length > 0 && // 1순위 있을 때
          <span className="default-item">
            <Typography variant="subtitle2">
              1순위 조건
            </Typography>
            {
              firstPriority.map((option: any, index: number) => {
                return (
                  <span key={index} className="details-card">
                    <Typography variant="subtitle2">
                      { getDetailsNameLabel(option?.name) }
                    </Typography>
                    <span>
                      {option?.data !== null ?
                        getDetailOptionLabel(option?.name, option?.data) :
                        <i>항목 작성 전입니다</i>
                      }
                    </span>
                  </span>
                )
              })
            }
          </span>
        }
        {secondPriority.length > 0 && // 2순위 있을 때
          <span className="default-item">
            <Typography variant="subtitle2">
              2순위 조건
            </Typography>
            {
              secondPriority.map((option: any, index: number) => {
                return (
                  <span key={index} className="details-card">
                    <Typography variant="subtitle2">
                      { getDetailsNameLabel(option?.name) }
                    </Typography>
                    <span>
                      {option?.data !== null ?
                        getDetailOptionLabel(option?.name, option?.data) :
                        <i>항목 작성 전입니다</i>
                      }
                    </span>
                  </span>
                )
              })
            }
          </span>
        }
        {thirdPriority.length > 0 && // 3순위 있을 때
          <span className="default-item">
            <Typography variant="subtitle2">
              3순위 조건
            </Typography>
            {
              thirdPriority.map((option: any, index: number) => {
                return (
                  <span key={index} className="details-card">
                    <Typography variant="subtitle2">
                      { getDetailsNameLabel(option?.name) }
                    </Typography>
                    <span>
                      {option?.data !== null ?
                        getDetailOptionLabel(option?.name, option?.data) :
                        <i>항목 작성 전입니다</i>
                      }
                    </span>
                  </span>
                )
              })
            }
          </span>
        }
      </span>
    </DetailsTabRoot>
  );
};

const DetailsTabRoot = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "24px",

    ".default-box": {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    ".default-item": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },

    ".profile-box": {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    ".profile-card": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "12px 16px",
      backgroundColor: theme.palette.primary_lighten3,
      borderRadius: "6px",
    },
    ".profile-card-item": {
      display: "flex",
      flexDirection: "row",
      gap: "8px",
      alignItems: "center",
    },
    ".details-card": {
      backgroundColor: theme.palette.gray5,
      padding: "12px 20px",
      borderRadius: "6px",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    ".details-card-chips": {
      display: "flex",
      flexDirection: "row",
      gap: "12px",
      flexWrap: "wrap",
    },
    ".details-card-item": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
  };
});
