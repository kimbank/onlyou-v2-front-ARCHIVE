export default function Index() {
  return <div>hello</div>
}

// 'use client'

// import useSWR from 'swr';
// import axios from "axios";
// import Link from 'next/link';
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';

// import Bag from "@/public/bag.svg";
// import House from "@/public/house.svg";
// import People from "@/public/people.svg";

// import { Container, Typography } from "@mui/material";

// import { Certification, DangerNotification } from '@/comp/Notification';
// import { MainButton, SubMiniFullButton } from '@/comp/Button';
// import { DormantToggle } from '@/comp/Toggle';
// import Modal from '@/comp/Modal';
// import Error from "@/comp/error";



// const MyInfo = () => {
//   const [alertMessage, setAlertMessage] = useState('');
//   const [visible, setVisible] = useState(false);
//   const [isDormant, setIsDormant] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const { data } = useSWR("/test", fetch);


//   async function setDormanTrue() {
//     const res = await axios.get('/api/my_info/dormant/true');

//     if (res.data == 'success') {
//       setShowModal(false);
//       window.location.href = '/my_info';
//     } else {
//       alert('휴면상태 전환에 실패했습니다.');
//     }
//   }
//   async function setDormantFalse() {
//     const res = await axios.get('/api/my_info/dormant/false');

//     if (res.data == 'success') {
//       setShowModal(false);
//       window.location.href = '/my_info';
//     } else {
//       alert('휴면상태 해제에 실패했습니다.');
//     }
//   }

//   const handleDormant = (e, newValue) => {
//     if (newValue !== null) {
//       setShowModal(true);
//       if (newValue == 'true') {
//         // setIsDormant(true);
//         // setDormanTrue();
//       }
//       if (newValue == 'false') {
//         // setIsDormant(false);
//         // setDormantFalse();
//       }
//     }
//   }

//   if(!data) return <Error />;

//   return (
//     <>
//       <DangerNotification alertMessage={alertMessage} visible={visible} setVisible={setVisible} />

//       <Container disableGutters sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '16px',
//         paddingBottom: '80px',
//       }}> 
//         <Typography className='heading2'>내 정보</Typography>
//         {/*백엔드로 구현되는 부분인거 같아 오렌지색 박스 안의 부분은
//             건들이지 않았습니다.*/}
//         <Container disableGutters sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           borderRadius: "24px",
//           border: 1,
//           padding: "24px",
//           gap: '4px',
//           borderColor: "#FFC999"
//         }}>
//           <Container disableGutters sx={{
//             display: 'flex',
//             flexDirection: 'row',
//             gap: '8px',
//           }}>
//             {data.job_type && <Certification alertMessage="직장 인증" />}
//             {data.education && <Certification alertMessage="신분 인증" />}
//           </Container>

//           {/* 닉네임 */}
//           <Typography className='heading2' marginBottom={'16px'}> 
//             {data.nickname}
//           </Typography>

//           {/* 직장유형 */}
//           <Typography className='basic-gray' sx={{display: 'flex', verticalAlign: 'center'}}>
//             <Image src={Bag} width='20px' style={{marginRight: '10px'}}/>
//             {data.job_type ? data.job_type : "직장정보 미입력"}
//           </Typography>

//           {/* 거주지 */}
//           <Typography className='basic-gray' sx={{display: 'flex', verticalAlign: 'center'}}>
//             <Image src={House} width='20px' style={{marginRight: '10px'}}/>
//             {data.residence ? data.residence : "거주지 미입력"}
//           </Typography>

//           {/* 생년월일 */}
//           <Typography className='basic-gray' sx={{display: 'flex', verticalAlign: 'center'}}>
//             <Image src={People} width='20px' style={{marginRight: '10px'}}/>
//             {data.date_birth ? data.date_birth : "????"}년생
//           </Typography>
//         </Container>

//         {/*매칭 활성화와 휴면 상태를 나타내는 버튼입니다.
//         탈퇴페이지에서의 문제와 마찬가지로 옆으로 정렬이 되지않았습니다. */}  

//         <DormantToggle isDormant={Boolean(data.dormant)} handleDormant={handleDormant} />
//         <Modal clicked={showModal} setClicked={setShowModal}>
//           {
//             data.dormant ? 
//             <>
//               <Typography className='heading2' style={{marginRight: '56px'}}>휴면상태를<br/>해제하시겠습니까?</Typography>
//               <Typography className='basic-gray'>{data.dormant}에 휴면상태로<br/>전환되었습니다.</Typography>
//               <MainButton buttonName='휴면 해제하기' onClick={() => setDormantFalse()} />
//             </> :
//             <>
//               <Typography className='heading2' style={{marginRight: '56px'}}>휴면상태로<br/>전환하시겠습니까?</Typography>
//               <MainButton buttonName='휴면 전환하기' onClick={() => setDormanTrue()}/>
//             </>
//           }
//         </Modal>


//         <Container disableGutters sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '8px',
//           marginTop: '32px',
//         }}>
//           <Typography className='heading4' style={{marginBottom: '5px'}}>미리보기</Typography>
//           <Link href='/my/letter'>
//               <SubMiniFullButton buttonName={'내 정보 미리보기'} />
//           </Link>
//           <Link href='/target'>
//               <SubMiniFullButton buttonName={'이상형 정보 미리보기'} />
//           </Link>
//         </Container>

//         <Container disableGutters sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '8px',
//           marginTop: '32px',
//         }}>
//           {/*다음 아래의 버튼들의 크기가 컨테이너 가로길이를 전부 채우도록만 수정 부탁드립니다.*/}
//           <Typography className='heading4' style={{marginBottom: '5px'}}>매칭 신청서 수정하기</Typography>
//           <Link href='/application/my/value'>
//             <SubMiniFullButton buttonName={'내 정보 수정하기'} />
//           </Link>
//           <Link href='/application/target'>
//             <SubMiniFullButton buttonName={'이상형 정보 수정하기'} />
//           </Link>
//           {/* <a href='https://g8h7y7g082m.typeform.com/to/hbat7gbg' target='_blank'> */}
//             <SubMiniFullButton buttonName={'인증 뱃지 수정하기'} onClick={() => {setAlertMessage('준비 중인 기능입니다.');setVisible(true)}} />
//           {/* </a> */}
//           <a href='https://g8h7y7g082m.typeform.com/to/f2XrR8ax'>
//             <SubMiniFullButton buttonName={'사진 수정하기'} />
//           </a>
//           <a href='https://g8h7y7g082m.typeform.com/to/M8kI8xyb'>
//             <SubMiniFullButton buttonName={'편지 수정하기'} />
//           </a>
//         </Container>
//         <Container disableGutters sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '8px',
//           marginTop: '32px',
//         }}>
//           <Typography className='heading4'>기타</Typography>
//           <SubMiniFullButton buttonName={'지인 차단'} onClick={() => {setAlertMessage('준비 중인 기능입니다.');setVisible(true)}} />
//           <SubMiniFullButton buttonName={'경고 점수 조회'} onClick={() => {setAlertMessage('준비 중인 기능입니다.');setVisible(true)}} />
//           <a href="/logout" className='heading7' style={{textDecoration: 'underline', color: 'rgba(178, 176, 174, 1)', marginTop: '16px', marginLeft: '14px'}}>로그아웃</a>
//           <a href="https://g8h7y7g082m.typeform.com/to/BZedJjPX" className='heading7' style={{textDecoration: 'underline', color: 'rgba(178, 176, 174, 1)', marginTop: '0px', marginLeft: '14px'}}>회원 탈퇴</a>
//         </Container>
//       </Container>
//     </>
//   );
// }

// export default MyInfo;
