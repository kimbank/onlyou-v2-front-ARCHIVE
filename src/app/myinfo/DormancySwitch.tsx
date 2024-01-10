import { styled, Button, Skeleton } from '@mui/material';
import { useMyinfo } from '@/api/hooks/useMyinfo';
import { switchDormancy } from '@/api/myinfo';
import useModal from '@/hooks/useModal';

import Drawer from "@/components/Drawer"

const DormancySwitch = () => {
  const { myInfo, isLoading, mutate } = useMyinfo();
  const { isModalOpen, openModal, closeModal } = useModal();

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
      alert('휴면상태 전환에 실패했습니다.');
    }
  }

  return (
    <>
      {isLoading ?
        <DormancySwitchSkeleton variant="rectangular" animation="wave" height={40} /> :
        <DormancySwitchRoot>
          {myInfo?.dormant ? // 휴면상태일 때
            <>
              <OffButton onClick={() => {openModal()}}>매칭 활성화</OffButton>
              <OnButton>휴면</OnButton>
            </> : // 휴면상태가 아닐 때
            <>
              <OnButton>매칭 활성화</OnButton>
              <OffButton onClick={() => {openModal()}}>휴면</OffButton>
            </>
          }
        </DormancySwitchRoot>
      }
      <Drawer
        title={"휴면 전환을 해제 하시겠습니까?"}
        body={myInfo?.dormant ? `${myInfo?.dormant}에 휴면되었습니다.` : "휴면 전환을 하면 매칭이 불가능해집니다."}
        complete={myInfo?.dormant ? "매칭 활성화" : "휴면 전환"}
        onComplete={handleDormancy}
        open={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

const DormancySwitchRoot = styled('div')({
  borderRadius: '6px',
  backgroundColor: '#D3D6DB',
  width: '100%',
  height: '40px',
  overflow: 'hidden',

  animation: 'ease-in-out 0.3s',
});

const DormancySwitchSkeleton = styled(Skeleton)({
  borderRadius: '6px',
  backgroundColor: '#D3D6DB',
});

const OnButton = styled(Button)({
  borderRadius: '6px',
  width: '50%',
  height: '100%',
  pointerEvents: 'none',

  ":hover": {
    boxShadow: 'none',
  }
});

const OffButton = styled(Button)({
  borderRadius: '6px',
  backgroundColor: '#D3D6DB',
  color: '#5C5F63',
  fontWeight: '400',
  width: '50%',
  height: '100%',

  ":hover": {
    backgroundColor: 'inherit',
    boxShadow: 'none',
  }
});

export default DormancySwitch
