import Image from 'next/image';

import Job from "public/icons/job.svg";
import Home from "public/icons/home.svg";
import Birth from "public/icons/birth.svg";

import { useMyinfo } from '@/api/hooks/useMyinfo';
import { styled, Button, Skeleton, Box, Divider, Typography } from '@mui/material';


const ProfileCard = () => {
  const { myInfo, isLoading, isError } = useMyinfo();

  return (
    <ProfileCardRoot>
      <ProfileCertification>
        <Button variant='outlined'>신분 인증</Button>
        <Button variant='outlined'>직장 인증</Button>
      </ProfileCertification>

      <Divider sx={{ borderColor: "#fff", width: "100%"}} />

      <ProfileInfo>
        <Typography variant="subtitle1">{myInfo?.nickname}</Typography>
        <span className='item'>
          <Image src={Job} width={20} alt="직장"/>
          <Typography variant="body1">{myInfo?.jobType}</Typography>
        </span>
        <span className='item'>
          <Image src={Home} width={20} alt="거주지"/>
          <Typography variant="body1">{myInfo?.residence}</Typography>
        </span>
        <span className='item'>
          <Image src={Birth} width={20} alt="나이"/>
          <Typography variant="body1">{myInfo?.dateBirth}</Typography>
        </span>
      </ProfileInfo>
      <DetailButton variant="outlined">프로필 상세보기</DetailButton>
    </ProfileCardRoot>
  )
}

const ProfileCardRoot = styled('div')({
  borderRadius: "6px",
  backgroundColor: "#FFF0E4",
  padding: "16px 20px 20px 20px",

  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px"
})

const ProfileCertification = styled('div')({
  display: "flex",
  gap: "16px",
  alignItems: "center",
})

const ProfileInfo = styled('div')({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "12px",

  ".item": {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
  },
})

const DetailButton = styled(Button)({
  backgroundColor: "#fff",
  width: "100%",
})

export default ProfileCard
