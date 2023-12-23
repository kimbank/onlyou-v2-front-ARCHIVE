"use client"

import axios from "axios";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import Job from "public/icons/job.svg";
import Home from "public/icons/home.svg";
import Birth from "public/icons/birth.svg";

import { Container, Typography } from "@mui/material";
import Error from '@/components/error';

import { Certification, DangerNotification } from '@/components/Notification/legacy';
import { MainButton, SubMiniFullButton } from '@/components/Button/legacy';
import { DormantToggle } from '@/components/Toggle';
import Modal from '@/components/Modal/legacy';

import HomeHeader from "@/components/Header/HomeHeader";
import BottomNavi from "@/components/BottomNavi";

import { useMyinfo } from '@/hooks';


const MyInfo = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [isDormant, setIsDormant] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { myInfo, isLoading, isError } = useMyinfo();


  async function setDormanTrue() {
    const res = await axios.get('/api/my_info/dormant/true');

    if (res.data == 'success') {
      setShowModal(false);
      window.location.href = '/my_info';
    } else {
      alert('휴면상태 전환에 실패했습니다.');
    }
  }
  async function setDormantFalse() {
    const res = await axios.get('/api/my_info/dormant/false');

    if (res.data == 'success') {
      setShowModal(false);
      window.location.href = '/my_info';
    } else {
      alert('휴면상태 해제에 실패했습니다.');
    }
  }

  const handleDormant = (e: any, newValue: any) => {
    if (newValue !== null) {
      setShowModal(true);
      if (newValue == 'true') {
        // setIsDormant(true);
        // setDormanTrue();
      }
      if (newValue == 'false') {
        // setIsDormant(false);
        // setDormantFalse();
      }
    }
  }

  if (isError)
    return <Error />;

  return (
    !isLoading &&
    <>
      <HomeHeader />
      <div id="content">
        <DangerNotification alertMessage={alertMessage} visible={visible} setVisible={setVisible} />

        <Container disableGutters sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          paddingBottom: '80px',
        }}> 
          <Typography className='heading2'>내 정보</Typography>
          {/*백엔드로 구현되는 부분인거 같아 오렌지색 박스 안의 부분은
              건들이지 않았습니다.*/}
          <Container disableGutters sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: "24px",
            border: 1,
            padding: "24px",
            gap: '4px',
            borderColor: "#FFC999"
          }}>
            <Container disableGutters sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '8px',
            }}>
              {myInfo?.jobType && <Certification alertMessage="직장 인증" />}
              {myInfo?.education && <Certification alertMessage="신분 인증" />}
            </Container>

            {/* 닉네임 */}
            <Typography className='heading2' marginBottom={'16px'}> 
              {myInfo?.nickname}
            </Typography>

            {/* 직장유형 */}
            <Typography className='basic-gray' sx={{display: 'flex', verticalAlign: 'center'}}>
              <Image src={Job} width={20} style={{marginRight: '10px'}} alt="직장"/>
              {myInfo?.jobType ? myInfo?.job_type : "직장정보 미입력"}
            </Typography>

            {/* 거주지 */}
            <Typography className='basic-gray' sx={{display: 'flex', verticalAlign: 'center'}}>
              <Image src={Home} width={20} style={{marginRight: '10px'}} alt="거주지"/>
              {myInfo?.residence ? myInfo?.residence : "거주지 미입력"}
            </Typography>

            {/* 생년월일 */}
            <Typography className='basic-gray' sx={{display: 'flex', verticalAlign: 'center'}}>
              <Image src={Birth} width={20} style={{marginRight: '10px'}} alt="나이"/>
              {myInfo?.date_birth ? myInfo?.date_birth : "????"}년생
            </Typography>
          </Container>

          {/*매칭 활성화와 휴면 상태를 나타내는 버튼입니다.
          탈퇴페이지에서의 문제와 마찬가지로 옆으로 정렬이 되지않았습니다. */}  

          <DormantToggle isDormant={Boolean(myInfo?.dormant)} handleDormant={handleDormant} />
          <Modal clicked={showModal} setClicked={setShowModal}>
            {
              myInfo?.dormant ? 
              <>
                <Typography className='heading2' style={{marginRight: '56px'}}>휴면상태를<br/>해제하시겠습니까?</Typography>
                <Typography className='basic-gray'>{myInfo.dormant}에 휴면상태로<br/>전환되었습니다.</Typography>
                <MainButton buttonName='휴면 해제하기' onClick={() => setDormantFalse()} />
              </> :
              <>
                <Typography className='heading2' style={{marginRight: '56px'}}>휴면상태로<br/>전환하시겠습니까?</Typography>
                <MainButton buttonName='휴면 전환하기' onClick={() => setDormanTrue()}/>
              </>
            }
          </Modal>


          <Container disableGutters sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginTop: '32px',
          }}>
            <Typography className='heading4' style={{marginBottom: '5px'}}>미리보기</Typography>
            <Link href='/my/letter'>
                <SubMiniFullButton buttonName={'내 정보 미리보기'} onClick={null} />
            </Link>
            <Link href='/target'>
                <SubMiniFullButton buttonName={'이상형 정보 미리보기'} onClick={null} />
            </Link>
          </Container>

          <Container disableGutters sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginTop: '32px',
          }}>
            {/*다음 아래의 버튼들의 크기가 컨테이너 가로길이를 전부 채우도록만 수정 부탁드립니다.*/}
            <Typography className='heading4' style={{marginBottom: '5px'}}>매칭 신청서 수정하기</Typography>
            <Link href='/application/my/value'>
              <SubMiniFullButton buttonName={'내 정보 수정하기'} onClick={null} />
            </Link>
            <Link href='/application/target'>
              <SubMiniFullButton buttonName={'이상형 정보 수정하기'} onClick={null} />
            </Link>
            {/* <a href='https://g8h7y7g082m.typeform.com/to/hbat7gbg' target='_blank'> */}
              <SubMiniFullButton buttonName={'인증 뱃지 수정하기'} onClick={() => {setAlertMessage('준비 중인 기능입니다.');setVisible(true)}} />
            {/* </a> */}
            <a href='https://g8h7y7g082m.typeform.com/to/f2XrR8ax'>
              <SubMiniFullButton buttonName={'사진 수정하기'} onClick={null} />
            </a>
            <a href='https://g8h7y7g082m.typeform.com/to/M8kI8xyb'>
              <SubMiniFullButton buttonName={'편지 수정하기'} onClick={null} />
            </a>
          </Container>
          <Container disableGutters sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginTop: '32px',
          }}>
            <Typography className='heading4'>기타</Typography>
            <SubMiniFullButton buttonName={'지인 차단'} onClick={() => {setAlertMessage('준비 중인 기능입니다.');setVisible(true)}} />
            <SubMiniFullButton buttonName={'경고 점수 조회'} onClick={() => {setAlertMessage('준비 중인 기능입니다.');setVisible(true)}} />
            <a href="/logout" className='heading7' style={{textDecoration: 'underline', color: 'rgba(178, 176, 174, 1)', marginTop: '16px', marginLeft: '14px'}}>로그아웃</a>
            <a href="https://g8h7y7g082m.typeform.com/to/BZedJjPX" className='heading7' style={{textDecoration: 'underline', color: 'rgba(178, 176, 174, 1)', marginTop: '0px', marginLeft: '14px'}}>회원 탈퇴</a>
          </Container>
        </Container>
      </div>
      <BottomNavi />
    </>
  );
}

export default MyInfo;
