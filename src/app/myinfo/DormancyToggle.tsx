import { styled, Button, Skeleton, Typography } from '@mui/material';
import { useMyinfo } from '@/api/hooks/useMyinfo';
import { switchDormancy } from '@/api/myinfo';
import useModal from '@/hooks/useModal';

import Drawer from "@/components/Drawer"
import Toggle from "@/components/Toggle/iOS";
import Backdrop from '@/components/Backdrop';

const DormancySwitch = () => {
  const { myInfo, isLoading, mutate, isMutating } = useMyinfo();
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
      <Backdrop open={isMutating} />
      <DormancyMenuRoot>
        <span>
          <Typography variant="subtitle1">
            매칭 활성화하기
          </Typography>
          <Typography variant="body1">
            현재 프로필을 받아 볼 수 있어요.
          </Typography>
        </span>
        <Toggle checked={myInfo?.dormant} onChange={handleDormancy} onClick={() => {}} />
      </DormancyMenuRoot>
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

const DormancyMenuRoot = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '40px',
  overflow: 'hidden',

  animation: 'ease-in-out 0.3s',
});

const DormancyMenuSkeleton = styled(Skeleton)({
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
