import { styled, Typography } from "@mui/material";


export const CertificationBadge = ({ name }: { name: string }) => {
  return (
    <CertifyRoot>
      <Typography variant="body3" color="primary">
        { name }
      </Typography>
    </CertifyRoot>
  );
};

const CertifyRoot = styled('span')(({ theme }) => {
  return {
    backgroundColor: String(theme.palette.primary_lighten3),
    gap: "8px",
    borderRadius: "4px",
    padding: "2px 6px",
    display: "flex",
    alignItems: "center",
    height: 21,
  };
});

export default CertificationBadge;
