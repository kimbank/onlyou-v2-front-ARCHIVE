import Modal from "@/components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { showModal, closeModal } from "@/store/home/modalSlice";
import { on } from "events";


const ModalProvider = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal);
  const { title, body, cancel, complete, isModalOpen, onModalClose, onComplete, onCancel } = modalState;

  if (!isModalOpen) return;

  return (
    <>
      {/* <button onClick={() => dispatch(
        showModal({
          title: "모달 제목",
          // body: "Modal Body",
          // cancel: "Cancel",
          complete: "Complete",
          onComplete: () => dispatch(closeModal()),
        })
      )}
      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >모달 열기</button> */}
      <Modal
        title={title}
        body={body}
        cancel={cancel}
        complete={complete}
        isModalOpen={isModalOpen}
        onModalClose={onModalClose}
        onComplete={() => { onComplete(); dispatch(closeModal()) }}
        onCancel={() => { onCancel(); dispatch(closeModal()) }}
      />
    </>
  );
}

export default ModalProvider;
