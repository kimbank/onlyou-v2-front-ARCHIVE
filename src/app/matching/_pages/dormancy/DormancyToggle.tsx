import { styled, Button, Skeleton, Typography, Box } from "@mui/material";
import { useMyinfo } from "@/api/hooks/useMyinfo";
import { switchDormancy } from "@/api/myinfo";
import useModal from "@/hooks/useModal";

import Drawer from "@/components/Drawer";
import Toggle from "@/components/Toggle/iOS";
import Backdrop from "@/components/Backdrop";
import { useEffect, useState } from "react";
import { formatDate } from "@/utils/formatDate";
import { useMatchingStatus } from "@/api/hooks/useMatchingStatus";

const DormancySwitch = () => {
  const { mutate } = useMatchingStatus();
  const { myInfo, isLoading, isMutating } = useMyinfo();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [savedDate, setSavedDate] = useState(null);
  const formattedDate = savedDate ? formatDate(savedDate) : "";

  useEffect(() => {
    if (myInfo?.dormant && typeof myInfo.dormant === "string") {
      setSavedDate(myInfo.dormant);
    }
  }, [myInfo?.dormant]);

  async function handleDormancy() {
    let res;
    if (myInfo?.dormant) {
      res = await switchDormancy(false);
    } else {
      res = await switchDormancy(true);
    }
    if (res) {
      closeModal();
      mutate();
    } else {
      alert("휴면상태 전환에 실패했습니다.");
    }
  }

  return (
    <>
      <Backdrop open={isMutating} />
      <DormancyMenuRoot>
        <Box>
          <Typography variant="subtitle1">매칭 활성화하기</Typography>
          {/* <Typography variant="body2">
            {myInfo?.dormant
              ? "프로필 교환이 잠시 중단되었어요."
              : "현재 프로필을 받아 볼 수 있어요."}
          </Typography> */}
        </Box>
        <Toggle
          checked={!myInfo?.dormant}
          // onChange={handleDormancy}
          onClick={() => {
            openModal();
          }}
        />
      </DormancyMenuRoot>
      <Drawer
        title={
          !myInfo?.dormant
            ? "휴면 전환 하시겠습니까?"
            : "다시 프로필을 받으시겠어요?"
        }
        body={
          !myInfo?.dormant
            ? "휴면 전환을 하면 매칭이 불가능해집니다."
            : `${formattedDate}에 휴면처리 되었습니다.`
        }
        complete={!myInfo?.dormant ? "휴면 전환" : "매칭 활성화"}
        onComplete={handleDormancy}
        open={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

const DormancyMenuRoot = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "auto",
  overflow: "hidden",

  animation: "ease-in-out 0.3s",
  "&> div": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
});

export default DormancySwitch;
