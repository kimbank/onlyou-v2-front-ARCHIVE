"use client";

import Container from "@mui/material/Container";
import EmptyHeader from "@/components/Header/EmptyHeader";
import { FormEvent, useEffect, useState } from "react";

import { signinCodeSend, signinCodeVerify } from "@/api/auth";

import { Box, TextField, Button, Typography, styled } from "@mui/material";

import useTimer from "@/hooks/useTimer";
import UTCtoKST from "@/utils/utc2kst";

import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";

interface UseTimerResult {
  totalSeconds: number;
  restart: (expiryTimestamp: Date | string) => void;
}

interface SigninCodeSendResponse {
  success: boolean;
  expiryTimestamp: string;
}

const Home = () => {
  const { totalSeconds, restart } = useTimer(new Date()) as UseTimerResult;
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeError, setIsCodeError] = useState(false);
  const [codeErrorMessage, setCodeErrorMessage] = useState("");

  const router = useRouter();

  async function handleSendCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get("code") === "") {
      const res = (await signinCodeSend(
        data.get("mobileNumber")
      )) as SigninCodeSendResponse;
      console.log("resrs", res);
      setIsCodeSent(true);
      const expiryTime = new Date(res.expiryTimestamp);
      const currentTime = new Date();
      const secondsLeft = (expiryTime.getTime() - currentTime.getTime()) / 1000;
      const futureTime = new Date(currentTime.getTime() + secondsLeft * 1000);
      restart(futureTime);
      console.log("insideSeconds", totalSeconds);
    }
  }

  // async function handleVerifyCode(event: any) {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);

  //   try {
  //     const res = await signinCodeVerify(
  //       data.get("mobileNumber"),
  //       data.get("code")
  //     );
  //     console.log(res);

  //     if ("message" in res) {
  //       alert("오류: " + res.message);
  //     } else if ("token" in res) {
  //       console.log("res", res);
  //       router.push("matching");
  //     } else {
  //       console.log("알 수 없는 응답:", res);
  //     }
  //   } catch (error) {
  //     console.error("인증 오류:", error);
  //     alert("인증 처리 중 오류가 발생했습니다.");
  //   }
  // }
  const [verifyCodeError, setVerifyCodeError] = useState<string | null>(null);

  async function handleVerifyCode(event: any) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setVerifyCodeError(null); // 초기화

    try {
      const res = await signinCodeVerify(
        data.get("mobileNumber"),
        data.get("code")
      );

      if ("message" in res) {
        if (res.message.includes("TRY_LEFT")) {
          const tryLeftMatch = res.message.match(/TRY_LEFT (\d+)/);
          const triesLeft = tryLeftMatch ? tryLeftMatch[1] : "unknown";

          setVerifyCodeError(
            `인증번호가 틀렸습니다. ${triesLeft}회의 기회가 남았습니다.`
          );
        } else {
          setVerifyCodeError(res.message);
        } // 서버에서 반환된 오류 메시지 설정
      } else if ("token" in res) {
        router.push("matching");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          switch (axiosError.response.status) {
            case 409:
              setVerifyCodeError("이미 요청하신 인증번호가 있습니다.");
              break;
            case 403:
              window.location.reload();
              break;
            default:
              setVerifyCodeError("알 수 없는 오류가 발생했습니다.");
          }
        }
      } else {
        setVerifyCodeError("인증 처리 중 오류가 발생했습니다.");
      }
    }
  }

  return (
    <>
      <EmptyHeader />
      <LoginRoot id="content">
        <Typography variant="h1">
          로그인
          <Typography variant="body2">
            로그인을 위해 전화번호를 인증해 주세요
          </Typography>
        </Typography>
        <Box
          className="form"
          component="form"
          onSubmit={isCodeSent ? handleVerifyCode : handleSendCode}
          noValidate
        >
          <Box className="number">
            <TextField
              required
              fullWidth
              id="mobileNumber"
              label="전화번호"
              name="mobileNumber"
              autoComplete="user_id"
              autoFocus
            />
            <Button type="submit" variant="contained" disabled={isCodeSent}>
              <Typography variant="subtitle2">인증번호 전송</Typography>
            </Button>
          </Box>
          <Box className="verify">
            <TextField
              required
              fullWidth
              name="code"
              label={verifyCodeError ? "인증번호 입력" : "인증번호 6자리"}
              type="code"
              id="code"
              autoComplete="current-password"
              error={verifyCodeError != null}
            />
            {verifyCodeError && (
              <Typography variant="body3" color="error">
                {verifyCodeError}
              </Typography>
            )}
            <Box className="verifyCode">
              {isCodeSent ? (
                <Typography color="primary" variant="subtitle2">
                  {totalSeconds}
                </Typography>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Button
            size="large"
            type="submit"
            variant="contained"
            disabled={!isCodeSent}
          >
            로그인
          </Button>
        </Box>
      </LoginRoot>
    </>
  );
};

export default Home;

const LoginRoot = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",

  "& p": {
    marginTop: 8,
  },
  ".form": {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    "& > Button:last-child": {
      marginTop: 8,
    },
  },

  ".number": {
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    gap: 8,
    height: " auto",
    "& Button": {
      height: "56px",
      minWidth: 108,
      whiteSpace: "nowrap",
      padding: "16px 17px",
    },
  },
  ".verify": {
    height: "56px",
    position: "relative",
    ".verifyCode": {
      position: "absolute",
      top: "50%",
      right: 0,
      marginRight: "16px",
      transform: "translateY(-50%)",
    },
  },
});

// console.log(new Date().toISOString());

// async function handleSubmit(event: any) {
//   event.preventDefault();
//   const data = new FormData(event.currentTarget);
//   console.log("data",data);
//   if (data.get("code") == "") {
//     const res = await signinCodeSend(data.get("mobileNumber"));
//     console.log("res",res);
//     console.log(new Date().toISOString());
//     // restart(res.expiryTimestamp);
//     // console.log(res.expiryTimestamp);
//     console.log(res)
//   } else {
//     const res = await signinCodeVerify(data.get("mobileNumber"), data.get("code"));
//     console.log(res);
//   }
// }

// res.expiryTimestamp을 2024-01-09T07:14:56.176Z 기준으로
// const expiryTime = new Date(res.expiryTimestamp).getTime();
// const currentTime = new Date().getTime();
// const secondsLeft = Math.floor((expiryTime - currentTime) / 1000);

// restart(secondsLeft > 180 ? 180 : secondsLeft);
// 작성해준 코드 설명해주고 시간값으로 변환해서 상세하게 알려줘
