import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DefaultModalProps } from "@/components/Modal";


export interface ModalState {
  title?:        string | React.ReactNode;
  body?:         boolean | string | React.ReactNode;
  cancel?:       boolean | string | React.ReactNode;
  complete:      string | React.ReactNode;
  isModalOpen?:   boolean;
  onModalClose?: () => void;
  onComplete?:   () => void;
  onCancel?:     () => void;
}

const initialState: DefaultModalProps = {
  title:        false,
  body:         false,
  cancel:       false,
  complete:     '',
  isModalOpen:  false,
  onModalClose: () => {},
  onComplete:   () => {},
  onCancel:     () => {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(
      state,
      action: PayloadAction<ModalState>,
    ) {
      const { title, body, cancel, complete, isModalOpen, onModalClose, onComplete, onCancel } = action.payload;
      state.title        = title !== undefined ? title : false;
      state.body         = body !== undefined ? body : false;
      state.cancel       = cancel !== undefined ? cancel : false;
      state.complete     = complete !== undefined ? complete : '';
      state.isModalOpen  = isModalOpen !== undefined ? isModalOpen : true;
      state.onModalClose = onModalClose !== undefined ? onModalClose : () => {};
      state.onComplete   = onComplete !== undefined ? onComplete : () => {};
      state.onCancel     = onCancel !== undefined ? onCancel : () => {};
    },
    closeModal(state) {
      state.isModalOpen = false;
    }
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
