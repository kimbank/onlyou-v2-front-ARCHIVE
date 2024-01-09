"use client";

import EmptyHeader from "@/components/Header/EmptyHeader";
import { Button, styled, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();

  const toHome = () => {
    router.push("/");
  };

  return (
    <>
      <EmptyHeader />
      <NotfoundRoot>
        <Typography color="gray2" variant="h1">
          404
        </Typography>

        <Typography color="gray2" variant="body2">
          Page not found
        </Typography>
        <Image src="/images/img_404.png" alt="404" width={164} height={150} />
        <Button onClick={toHome}>
          <Typography variant="subtitle1">홈으로 돌아가기</Typography>
        </Button>
      </NotfoundRoot>
    </>
  );
};

export default Index;

const NotfoundRoot = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "& > :nth-child(1)": {
      marginBottom: "4px",
    },
    "& > :nth-child(2)": {
      marginBottom: "24px",
    },
    "& > :nth-child(4)": {
      marginTop: "48px",
      width: "207px",
      height: "52px",
    },
  };
});
