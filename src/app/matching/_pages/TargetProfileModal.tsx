"use client";

import React from "react";
import { styled, Box, Modal, Tabs, Tab, Typography, Zoom } from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseRounded";
import BottomButton from "./BottomButton";

import { useDispatch } from "react-redux";
import { showModal, closeModal } from "@/store/home/modalSlice";

import { useMatchingStatus } from "@/api/hooks/useMatchingStatus";
import { useMatchingTargetDetails } from "@/api/hooks/useMatchingTargetDetails";
import { LettersTab } from "./LettersTab";
import { DetailsTab } from "./DetailsTab";
import { PhotosTab } from "./PhotosTab";


const TargetProfileModal = ({ open, onClose, matchingId, handleAccept, handleReject }: any) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState<string>("letters");
  const modalTitles = { "letters": "편지가 도착했어요", "details": "자세한 정보에요", "photos": "사진이에요" };
  const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
  };

  const { targetDetails, isLoading, isError } = useMatchingTargetDetails(matchingId);
  const { matchingStatus } = useMatchingStatus();

  if ((!matchingId || (!isLoading && isError)) && open) {
    dispatch(
      showModal({
        title: "매칭 데이터 에러",
        body: "매칭 데이터를 불러오는 도중 문제가 발생했습니다. 새로고침 하거나, 관리자에게 문의해주세요.",
        complete: "새로고침",
        cancel: "그냥보기",
        onComplete: () => window.location.reload(),
      })
    );
  }

  return (
    <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
      <Zoom in={open} unmountOnExit>
        <div id="page">
          <Root id="content">
            <CloseIcon className="close-button" onClick={onClose} />
            <Typography variant="h1">
              { targetDetails?.nickname }님의 <br />
              { modalTitles[activeTab as keyof typeof modalTitles] }
            </Typography>
            <Tabs
              variant="fullWidth"
              value={activeTab}
              onChange={handleTabsChange}
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="편지" value="letters" />
              <Tab label="상세 정보" value="details" />
              <Tab label="사진" value="photos" />
            </Tabs>
            { activeTab === "letters" && <LettersTab targetLetters={targetDetails?.letters} /> }
            { activeTab === "details" && <DetailsTab targetDetails={targetDetails?.details} /> }
            { activeTab === "photos" && <PhotosTab targetPhotos={targetDetails?.photos} userId={targetDetails?.userId} /> }
          </Root>
          {
            matchingStatus === "MATCHING_CHOICE" &&
            <BottomButton
              refuseText="거절하기"
              onRefuse={handleReject}
              acceptText="수락하기"
              onAccept={handleAccept}
            />
          }
        </div>
      </Zoom>
    </Modal>
  );
}


const Root = styled(Box)({
  height: "100vh",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  overflowX: "hidden",
  overflowY: "scroll",
  paddingBottom: "36px",
  position: "relative",
  ".close-button": {
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
    marginTop: "24px",
    marginRight: "24px",
  },

  ".caption": {
    marginBottom: "16px",
  },

  ".btn-prior-selected": {
    backgroundColor: "#fff !important",
    color: "#f70 !important",
    fontWeight: "700",
    border: "1px solid #F70",
  },

  "& .MuiTabs-root": {
    width: "calc(100% + 24*2)",
    margin: "0 -24px",
    overflow: "unset",
  },

  "& .MuiTab-root": {
    fontWeight: "400",
    borderBottom: "1px solid #D3D6DB",
  },

  "& .Mui-selected": {
    fontWeight: "700",
  },

  "& .MuiTabs-indicator": {
    height: "4px",
  },
});

export default TargetProfileModal;
