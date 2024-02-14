"use client"

import React from 'react';
import {
  styled,
  Box,
  Button,
  Typography,
  TextareaAutosize,
} from '@mui/material';
import {
  ReportGmailerrorred as ReportGmailerrorredIcon,
  AddRounded as AddRoundedIcon,
} from '@mui/icons-material';
import CloseHeader from '@/components/Header/CloseHeader';
import { InfoText } from "@/components/Notification/InfoText/InfoText";
import { FullDivider } from "@/components/Dividers/FullDivider";

import { useDispatch, useSelector } from 'react-redux';
import { setLetterValues, updateLetterStatus } from '@/store/letterValueSlice';

import { getLetterOptionLabel } from '@/constants/letter';
import useLetterList from '@/api/hooks/useLetterList';
import LetterListModal from './LetterListModal';
import useModal from '@/hooks/useModal';
import { putLetter } from "@/api/putLetter";
import Loading from "@/components/loading";


const LetterPage = () => {
  const dispatch = useDispatch();
  const letterValues = useSelector((state: RootState) => state.letter.letterValue);

  const { isModalOpen, openModal, closeModal } = useModal();
  const { letterList, isLoading, isError, mutate } = useLetterList();
  const [isPutLoading, setIsPutLoading] = React.useState(false);

  React.useEffect(() => {
    if (isLoading || isError) return;

    letterList.map((letter: any) => {
      if (
        letter?.index === undefined ||
        letter?.status === undefined ||
        letter?.content === undefined
      ) {
        return false;
      }

      if (typeof letter?.status === "number") {
        dispatch(
          setLetterValues({
            index: letter?.index,
            status: letter?.status,
            content: letter?.content,
          })
        )
      }
    });
  }, [letterList, isLoading, isError]);

  const isLetterRemovable = letterValues.filter((letter: any) => letter.status > 0).length > 3;

  const handleLetterDelete = async (letterIndex: number) => {
    setIsPutLoading(true);
    const letters = letterValues.filter((letter: any) => letter.status > 0 && letter.index !== letterIndex);

    // 정합성 검사
    if (letters.length < 3) {
      alert("활성화 편지는 3개 이상 이어야해요.");
    }

    const res = await putLetter(letters);

    if (res.status === 200) {
      mutate();
    } else {
      alert("편지 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }

    setIsPutLoading(false);
  }
  const setLetterEditable = (letterIndex: number) => {
    dispatch(
      updateLetterStatus({
        index: letterIndex,
        status: 2,
      })
    )
  }

  const handleSubmitLetters = async () => {
    setIsPutLoading(true);
    const letters = letterValues.filter((letter: any) => letter.status > 0);

    // 정합성 검사
    if (letters.length < 3) {
      alert("편지는 최소 3개 이상 작성해야해요.");
      setIsPutLoading(false);
      return;
    } else if (letters.filter((letter: any) => letter.content.length < 30).length > 0) {
      alert("30자 이상 작성하지 않은 편지가 존재해요.");
      setIsPutLoading(false);
      return;
    }

    const res = await putLetter(letters);

    if (res.status === 200) {
      mutate();
    } else {
      alert("편지 작성에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }

    setIsPutLoading(false);
  }


  const LetterEditor = (letterIndex: number) => {
    function handleTextChange(
      event: React.ChangeEvent<HTMLTextAreaElement>,
      index: number) {
      dispatch(
        setLetterValues({
          index: index,
          status: 2,
          content: event.target.value,
        })
      );
    }

    return (
      <Box sx={{ position: "relative" }}>
        <LetterBoxEditorTextArea
          minRows={3}
          placeholder="질문에 대한 답변을 30자 이상 입력해주세요"
          onChange={(e) => handleTextChange(e, letterIndex)}
          readOnly={letterValues[letterIndex].status < 2}
          value={letterValues[letterIndex].content}
        />
        <LetterBoxEditorCaption>
          <Typography variant="caption">
            글자 수 /&nbsp;
            <Typography
              variant="caption"
              // color={textVaild[letterIndex] ? "red" : "inherit"}
            >
              {letterValues[letterIndex].content?.length || 0}
            </Typography>
            자
          </Typography>
        </LetterBoxEditorCaption>
      </Box>
    )
  }

  return (
    <>
      { (isLoading || isPutLoading) && <Loading /> }
      <LetterListModal open={isModalOpen} onClose={closeModal} />
      <CloseHeader href='/myinfo' />

      <LetterPageRoot id="content">
        <TitleRoot>
          <Typography variant="h1">
            편지 수정하기
          </Typography>
          <Typography variant="body1">
            질문과 답변을 추가하거나 삭제할 수 있어요
          </Typography>
        </TitleRoot>

        <InfoText bgColor="primary">
          <ReportGmailerrorredIcon color="primary" />
          <Typography variant="body2">
            <strong>최소 3개</strong> 이상의 편지를 필수로 작성하셔야해요.
          </Typography>
        </InfoText>
        <Button
          sx={{ width: "100% !important" }}
          variant="outlined"
          color="primary"
          onClick={openModal}
        >
          <AddRoundedIcon
            sx={{ width: "18px", height: "18px", marginRight: "8px" }}
          />
          <Typography variant="subtitle2">질문 추가하기</Typography>
        </Button>


        {
          letterValues.map((letter: any, index: number) => {
            return letter?.status > 0 && (
              <LetterBox key={index}>
                <FullDivider />
                
                <Typography variant="subtitle2" sx={{ marginTop: "8px" }}>
                  { getLetterOptionLabel(letter.index) }
                </Typography>

                { LetterEditor(letter.index) }

                <LetterBoxButtonGroup>
                  {isLetterRemovable &&
                    <Button color="secondary" onClick={() => handleLetterDelete(letter.index)}>
                      삭제하기
                    </Button>
                  }
                  {letter.status < 2 ?
                    <Button variant="contained" onClick={() => setLetterEditable(letter.index)}>
                      수정하기
                    </Button> :
                    <Button variant="contained" onClick={() => handleSubmitLetters()}>
                      저장하기
                    </Button>
                  }
                </LetterBoxButtonGroup>
              </LetterBox>
            )
          })
        }
      </LetterPageRoot>
    </>
  );
}

const LetterPageRoot = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TitleRoot = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LetterBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const LetterBoxEditorTextArea = styled(TextareaAutosize)(({ ...props }) => {
  const { theme, readOnly, value } = props;
  const isValueValid = value ? String(value).length >= 30 : false;

  return {
    width: "100%",
    borderRadius: "10px",
    padding: "16px 16px 64px 16px",
    maxHeight: "210px",
    minHeight: "140px",
    resize: "none",
    border:
      "1px solid " + (isValueValid ? "#B2B0AE" : "red"),
    color: readOnly ? "gray" : "black",
    ...theme.typography.body1,
  }
});

const LetterBoxEditorCaption = styled('div')`
  position: absolute;
  bottom: 9px;
  margin-left: 16px;
  background-color: white;
  border-radius: 8px;
  padding: 4px 8px 16px 0px;
`;

const LetterBoxButtonGroup = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`;

export default LetterPage;
