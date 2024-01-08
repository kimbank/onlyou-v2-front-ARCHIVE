"use client";

import Container from "@mui/material/Container";
import EmptyHeader from "@/components/Header/EmptyHeader";
import { useEffect, useState } from "react";

import { signinCodeSend, signinCodeVerify } from "@/api/auth";

import { Box, TextField, Button, Typography } from "@mui/material";

import useTimer from "@/hooks/useTimer";
import UTCtoKST from "@/utils/utc2kst";

import { get } from "@/actions/test";
import { useRouter } from "next/navigation";

const Home = () => {
  const { totalSeconds, restart } = useTimer("200");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const router = useRouter();

  async function handleSendCode(event: any) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get("code") === "") {
      const res = await signinCodeSend(data.get("mobileNumber"));
      console.log("res", res);
      setIsCodeSent(true);
      if (res.success) {
        setIsCodeSent(true);
        restart(res.expiryTimestamp);
      }
    }
  }

  async function handleVerifyCode(event: any) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const res = await signinCodeVerify(
        data.get("mobileNumber"),
        data.get("code")
      );
      console.log(res);

      if ("message" in res) {
        alert("오류: " + res.message);
      } else if ("token" in res) {
        console.log("res", res);
        router.push("matching");
      } else {
        console.log("알 수 없는 응답:", res);
      }
    } catch (error) {
      console.error("인증 오류:", error);
      alert("인증 처리 중 오류가 발생했습니다.");
    }
  }

  useEffect(() => {
    console.log("isCodeSent", isCodeSent);
  }, [isCodeSent]);

  return (
    <>
      <EmptyHeader />
      <div id="content">
        <Typography variant="h1">
          로그인하기
          <Typography variant="body2">
            로그인을 위해 전화번호를 인증해주세요.
          </Typography>
        </Typography>
        <Box
          component="form"
          onSubmit={isCodeSent ? handleVerifyCode : handleSendCode}
          noValidate
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobileNumber"
            label="전화번호"
            name="mobileNumber"
            autoComplete="user_id"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="code"
            label="인증번호"
            type="code"
            id="code"
            autoComplete="current-password"
          />
          {isCodeSent ? (
            <Button variant="outlined">{totalSeconds}</Button>
          ) : (
            <Button type="submit" variant="contained">
              인증번호 전송
            </Button>
          )}
          {isCodeSent && (
            <Button type="submit" variant="contained">
              로그인하기
            </Button>
          )}
        </Box>
      </div>
    </>
  );
};

export default Home;

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
// // {
//   "token": {
//     "newAccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODU3MTZlNmM3MmJlZTU4OTZmNTIyYSIsImdlbmRlciI6dHJ1ZSwiaWF0IjoxNzA0NTcyOTI3LCJleHAiOjE3MDQ1NzQ3MjcsImF1ZCI6Im9ubHlvdSIsImlzcyI6InRlc3QifQ.LW4SiESd3k66R9nsgDFcW5vBYwidUgVEyB4Rx-x5Z2w",
//     "newRefreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnZW5kZXIiOnRydWUsImlhdCI6MTcwNDU3MjkyNywiZXhwIjoxNzA2Mzg3MzI3LCJhdWQiOiJvbmx5b3UiLCJpc3MiOiJ0ZXN0In0.ESJPGuAey_AOm3fdQgBbKaYXG3eY7mYOQZrcjh6rOto"
// }
