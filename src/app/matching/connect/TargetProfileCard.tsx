import CloseIcon from "@mui/icons-material/CloseRounded";
import { Box, Chip, Modal, styled, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { ConsistData } from "./Connect";
import Letter from "public/icons/letter.svg";
import Image from "next/image";
import Birth from "public/icons/birth.svg";
import Home from "public/icons/home.svg";
import Job from "public/icons/job.svg";
import colors from "@/assets/theme/base/colors";
import { FullDivider } from "@/components/Dividers/FullDivider";

interface TargetProfileCardProps {
  open: boolean;
  onClose: () => void;
  data: ConsistData;
}

const { gray5, primary_lighten3 } = colors;

export const TargetProfileCard = ({
  open,
  onClose,
  data,
}: TargetProfileCardProps) => {
  const [priority, setPriority] = useState(1);
  const titles = ["편지가 도착했어요", "자세한 정보에요", "사진이에요"];

  const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setPriority(newValue);
  };
  return (
    <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
      <div id="page">
        <Root id="content">
          <CloseIcon className="close-button" onClick={onClose} />
          <Typography variant="h1">
            {data?.nickname}님의 <br />
            {titles[priority - 1]}
          </Typography>
          <Tabs
            variant="fullWidth"
            value={priority}
            onChange={handleTabsChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="편지" value={1} />
            <Tab label="상세정보" value={2} />
            <Tab label="사진" value={3} />
          </Tabs>
          {priority === 1 && (
            <Box className="letter-tab">
              {data.letterOptions.map((letter, index) => (
                <Box
                  style={{
                    backgroundColor: ["#FFF6EF", "#F8F2FC"][index % 2],
                  }}
                  className="letter-box"
                  key={index}
                >
                  <Box className="letter-icon">
                    <Box className="letter-text">
                      <Image src={Letter} width={20} height={20} alt="Letter" />
                      <Typography variant="subtitle2">
                        {letter.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2">
                      {letter.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
          {priority === 2 && (
            <Box>
              <Typography className="caption" variant="body2" color="gray2">
                *상대방이 설정한 1-3순위 조건만 프로필에 보여집니다.
              </Typography>
              {data.targetingOptions.map((option, index) => (
                <Box className="info-tab" key={index}>
                  <Box className="info-box">
                    <Box className="item">
                      <Image src={Job} alt="job" width={20} height={20} />
                      <Typography variant="body2">{option.jobType}</Typography>
                    </Box>
                    <Box className="item">
                      <Image src={Home} alt="home" width={20} height={20} />
                      <Typography variant="body2">
                        {option.residence}
                      </Typography>
                    </Box>
                    <Box className="item">
                      <Image src={Birth} alt="birth" width={20} height={20} />
                      <Typography variant="body2">
                        {option.dateBirth}
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="me-box">
                    <Typography variant="subtitle3">
                      {option.me.firstPriority.label}
                    </Typography>
                    <Box className="me-item">
                      {option.me.firstPriority.values.map((value, index) => (
                        <Chip key={index} label={value} color="secondary" />
                      ))}
                    </Box>
                    <Typography variant="subtitle3">
                      {option.me.secondPriority.label}
                    </Typography>
                    <Box className="me-item">
                      {option.me.secondPriority.values.map((value, index) => (
                        <Chip key={index} label={value} color="secondary" />
                      ))}
                    </Box>
                    <Typography variant="subtitle3">
                      {option.me.thirdPriority.label}
                    </Typography>
                    <Box className="me-item">
                      {option.me.thirdPriority.values.map((value, index) => (
                        <Chip key={index} label={value} color="secondary" />
                      ))}
                    </Box>
                  </Box>
                  <FullDivider />
                  <Box className="target-box">
                    <Box className="target-wrap">
                      <Typography variant="subtitle3">
                        {option.target.firstPriority.label}
                      </Typography>

                      {option.target.firstPriority.values.map(
                        (value, index) => (
                          <Box className="target-item" key={index}>
                            <Typography variant="body2">{value}</Typography>
                          </Box>
                        )
                      )}
                    </Box>
                    <Box className="target-wrap">
                      <Typography variant="subtitle3">
                        {option.target.secondPriority.label}
                      </Typography>

                      {option.target.secondPriority.values.map(
                        (value, index) => (
                          <Box className="target-item" key={index}>
                            <Typography variant="body2">{value}</Typography>
                          </Box>
                        )
                      )}
                    </Box>
                    <Box className="target-wrap">
                      <Typography variant="subtitle3">
                        {option.target.thirdPriority.label}
                      </Typography>

                      {option.target.thirdPriority.values.map(
                        (value, index) => (
                          <Box className="target-item" key={index}>
                            <Typography variant="body2">{value}</Typography>
                          </Box>
                        )
                      )}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
          {priority === 3 && (
            <Box className="picture-box">
              <Box className="picture"></Box>
              <Box className="picture"></Box>
            </Box>
          )}
        </Root>
      </div>
    </Modal>
  );
};
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

  ".letter-tab": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  ".letter-box": {
    borderRadius: "8px",
    padding: "20px",
  },
  ".letter-icon": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  ".letter-text": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
  ".caption": {
    marginBottom: "16px",
  },
  ".info-tab": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  ".info-box": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "12px 16px",
    backgroundColor: primary_lighten3,
    borderRadius: "6px",
  },
  ".item": {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    alignItems: "center",
  },
  ".me-box": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    "&> div": {
      marginBottom: "4px",
    },
  },
  ".me-item": {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
  },

  ".target-box": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  ".target-wrap": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    "&> span": {
      marginBottom: "4px",
    },
  },
  ".target-item": {
    backgroundColor: gray5,
    padding: "12px 20px",
    borderRadius: "6px",
    gap: "8px",
    "&div ": {},
  },
  ".picture-box": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  ".picture": {
    height: "200px",
    backgroundColor: "#484848",
    borderRadius: "6px",
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
