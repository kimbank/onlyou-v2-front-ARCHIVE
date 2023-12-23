"use client"

import Container from '@mui/material/Container';
import EmptyHeader from '@/components/Header/EmptyHeader';
import { useState } from 'react';

import { signinCodeSend, signinCodeVerify } from '@/api/auth';

import { Box, TextField, Button, Typography } from '@mui/material';


const Home = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let res;
    if (data.get("code") == "") {
      res = await signinCodeSend(data.get("mobileNumber"), "000000");
    } else {
      res = await signinCodeVerify(data.get("mobileNumber"), data.get("code"));
    }

    console.log(res);
  }

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
        <Box component="form" onSubmit={handleSubmit} noValidate>
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
          <Button
            type="submit"
            variant="contained"
          >
            로그인하기
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Home;
