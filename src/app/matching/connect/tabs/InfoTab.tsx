import colors from "@/assets/theme/base/colors";
import { FullDivider } from "@/components/Dividers/FullDivider";
import { Box, Chip, styled, Typography } from "@mui/material";
import Image from "next/image";
import Birth from "public/icons/birth.svg";
import Home from "public/icons/home.svg";
import Job from "public/icons/job.svg";
import { ConsistData } from "../Connect";

interface Props {
  data: ConsistData;
}

const { primary_lighten3, gray5 } = colors;

export const InfoTab = ({ data }: Props) => {
  return (
    <Root>
      {/* <Typography className="caption" variant="body2" color="gray2">
        *상대방이 설정한 1-3순위 조건만 프로필에 보여집니다.
      </Typography> */}
      {data.targetingOptions.map((option, index) => (
        <Box className="info-tab" key={index}>
          <Box className="info-box">
            <Box className="item">
              <Image src={Job} alt="job" width={20} height={20} />
              <Typography variant="body2">{option.jobType}</Typography>
            </Box>
            <Box className="item">
              <Image src={Home} alt="home" width={20} height={20} />
              <Typography variant="body2">{option.residence}</Typography>
            </Box>
            <Box className="item">
              <Image src={Birth} alt="birth" width={20} height={20} />
              <Typography variant="body2">{option.dateBirth}</Typography>
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

              {option.target.firstPriority.values.map((value, index) => (
                <Box className="target-item" key={index}>
                  <Typography variant="body2">{value}</Typography>
                </Box>
              ))}
            </Box>
            <Box className="target-wrap">
              <Typography variant="subtitle3">
                {option.target.secondPriority.label}
              </Typography>

              {option.target.secondPriority.values.map((value, index) => (
                <Box className="target-item" key={index}>
                  <Typography variant="body2">{value}</Typography>
                </Box>
              ))}
            </Box>
            <Box className="target-wrap">
              <Typography variant="subtitle3">
                {option.target.thirdPriority.label}
              </Typography>

              {option.target.thirdPriority.values.map((value, index) => (
                <Box className="target-item" key={index}>
                  <Typography variant="body2">{value}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Root>
  );
};

const Root = styled(Box)({
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
  },
});
