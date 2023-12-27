import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  return { isModalOpen: isOpen, openModal, closeModal };
}

export default useModal;
