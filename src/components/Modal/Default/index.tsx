import {
  styled,
  Modal as MuiModal,
  Box,
  Button,
  Typography,
} from "@mui/material";

interface DefaultModalProps {
  /** Modal UI props */
  title?: string | React.ReactNode;
  body?: boolean | string | React.ReactNode;
  cancel?: boolean | string | React.ReactNode;
  complete: string | React.ReactNode;

  /** Modal functional props */
  isModalOpen: boolean;
  onModalClose?: () => void;
  onComplete: () => void;
  onCancel?: () => void;
}

const DefaultModal = ({
  title = false,
  body = false,
  cancel = false,
  complete = false,
  isModalOpen,
  onModalClose = (() => {}),
  onComplete = (() => {}),
  onCancel = (() => {}),
}: DefaultModalProps) => {

  const Title = (): React.ReactNode => {
    const TitleNode =
      typeof title === "string" ? (
        <Typography variant="subtitle1">{title}</Typography>
      ) : (
        title
      );
    return <div>{TitleNode}</div>;
  };

  const Body = (): React.ReactNode => {
    const BodyNode =
      typeof body === "string" ? (
        <Typography variant="body2">{body}</Typography>
      ) : (
        body
      );
    return <div>{BodyNode}</div>;
  }

  const Cancel = (): React.ReactNode => {
    const CancelNode =
      typeof cancel === "string" ? (
        <CancelButton size="small" onClick={onCancel}>
          {cancel}
        </CancelButton>
      ) : (
        cancel
      );
    return CancelNode;
  }

  const Complete = (): React.ReactNode => {
    const CompleteNode =
      typeof complete === "string" ? (
        <CompleteButton size="small" onClick={onComplete}>
          {complete}
        </CompleteButton>
      ) : (
        complete
      );
    return CompleteNode;
  }

  return (
    <MuiModal open={isModalOpen} onClose={onModalClose}>
      <ModalRoot>
        <ModalMessage>
          { title && <Title /> }
          { body && <Body /> }
        </ModalMessage>
        <ModalButtonGroup>
          { cancel && <Cancel /> }
          {/* TODO: 구체적인 구현이 필요함 */}
          { complete && <Complete /> }
        </ModalButtonGroup>
      </ModalRoot>
    </MuiModal>
  );
};

const ModalRoot = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  margin: "0 auto",
  width: "calc(100% - 48px)",
  maxWidth: "calc(480px - 48px)",
  maxHeight: "50vh",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "6px",

  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const ModalMessage = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  margin: 0,
  gap: "12px",

  "& > :nth-child(3)": {
    marginTop: "12px",
  },

  ".modal-buttons": {
    display: "flex",
    gap: "12px",
    justifyContent: "flex-end",
  },
});

const ModalButtonGroup = styled("div")({
  display: "flex",
  gap: "12px",
  justifyContent: "flex-end",
});

const CancelButton = styled(Button)({
  padding: "8px 12px",
  borderRadius: "6px",
  border: "1px solid #F70",
  color: "#F70",
  textAlign: "center",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "100%", /* 14px */
  backgroundColor: "#f44336",

  "&:hover": {
    backgroundColor: "#FFF0E4",
  },
});

const CompleteButton = styled(Button)({
  padding: "8px 12px",
  borderRadius: "6px",
  border: "1px solid #F70",
  color: "#fff",
  textAlign: "center",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "100%", /* 14px */
  backgroundColor: "#F70",

  "&:hover": {
    backgroundColor: "#F16416",
  },
});

export default DefaultModal;
