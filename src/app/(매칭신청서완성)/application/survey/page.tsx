'use client'

import { InfoText } from "@/app/components/Notification/InfoText/InfoText";
import RDButton from "@/app/components/RDButton/RDButton";
import { Box, Container, Typography } from "@mui/material";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import SurveyRoot from "./SurveyRoot";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
const Index = () => {
    return (
      <SurveyRoot>
        <Box className="title-box">
          <Typography variant="h1">매칭에 반영될 조건을 선택해요!</Typography>
          <Typography variant="body1">
            우선순위에 따라 최대 10개 조건을 선택할 수 있어요.
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">기본 반영 조건</Typography>
          <Typography variant="body2">선택하지 않아도 기본으로 반영되는 조건이에요.</Typography>
        </Box>
        <Box className="content-box">
          <InfoText>
            <Box className="check-icon">
              <SquareRoundedIcon className="box" />
              <CheckRoundedIcon className="check" />
            </Box>
            <Typography color="primary" variant="h6">
              나이 | 거주지 | 관심사 | 성격적 매력 | 외적 매력
            </Typography>
          </InfoText>
        </Box>
        <Box>
          <Typography variant="h5">1~3순위 조건 선택하기</Typography>
          <Typography>우선순위가 높을 수록 반영될 확률이 높아져요.</Typography>
        </Box>
        <RDButton variant="outlined" size="large" color="primary">
          이상형 조건 추가하기 +
        </RDButton>
        <RDStepNavButton prevText="이전" prevHref="value/" nextText="다음" />
      </SurveyRoot>
    );
}

export default Index;