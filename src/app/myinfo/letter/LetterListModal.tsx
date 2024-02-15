import {
  styled,
  Modal,
  Button,
  Typography,
  Zoom
} from "@mui/material";
import {
  ReportGmailerrorred as ReportGmailerrorredIcon
} from "@mui/icons-material";

import { letterOptions } from "@/constants/letter";
import { useDispatch, useSelector } from 'react-redux';
import { setLetterValues, updateLetterStatus } from '@/store/letterValueSlice';

import { getLetterOptionLabel } from '@/constants/letter';
import useLetterList from '@/api/hooks/useLetterList';

import { InfoText } from "@/components/Notification/InfoText/InfoText";
import { Checkbox } from "@/components/CheckBox/CheckBox";
import CloseHeader from "@/components/Header/CloseHeader";
import BottomButtonRoot from "@/components/BottomButton/BottomButtonRoot";


const LetterListModal = ({ open, onClose }: any) => {
  const dispatch = useDispatch();
  const letterValues = useSelector((state: RootState) => state.letter.letterValue);
  const questions = Object.entries(letterOptions.options);

  const handleCheckboxClick = (key: number) => {
    const newStatus = letterValues[key]?.status === 3 ? 0 : 3;
    dispatch(
      updateLetterStatus({
        index: key,
        status: newStatus,
      })
    );
  }
  const handleSave = () => {
    letterValues.map((letter: any, index: number) => {
      if (letter?.status > 2) {
        dispatch(
          updateLetterStatus({
            index: letter?.index,
            status: 2,
          })
        );
      }
    });
  }
  const isSavable = letterValues.filter((letter: any) => letter?.status > 2).length > 0;

  return (
    <Modal id="root" open={open} onClose={onClose} sx={{ height: "100vh" }}>
      <Zoom in={open} unmountOnExit>
        <div id="page" style={{ overflowY: "scroll" }}>
          <CloseHeader onClose={onClose} />

          <LetterListModalRoot id="content">
            <Typography variant="h1">
              편지 질문 추가하기
            </Typography>
            <InfoText bgColor="primary">
              <ReportGmailerrorredIcon color="primary" />
              <Typography variant="body2">
                <strong>최소 3개</strong> 이상의 편지를 필수로 작성하셔야해요.
              </Typography>
            </InfoText>


            {
              questions.map(([key, value], index) => {
                const letterStatus = letterValues[Number(key)]?.status;
                return (
                  <Checkbox
                    key={index}
                    buttonName={value}
                    onClick={() => handleCheckboxClick(Number(key))}
                    checked={letterStatus > 2}
                    disabled={letterStatus > 0 && letterStatus < 3}
                  />
                )
              })
            }
          </LetterListModalRoot>

          <BottomButtonRoot>
            <Button size="large" disabled={!isSavable} onClick={() => handleSave()}>
              저장하기
            </Button>
          </BottomButtonRoot>
        </div>
      </Zoom>
    </Modal>
  );
}

const LetterListModalRoot = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default LetterListModal;
