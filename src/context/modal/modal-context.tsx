import { createContext, useContext, useState } from 'react';

const ModalContext = createContext({});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [headerContent, setHeaderContent] = useState(null);

  const openModal = (content: any) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, modalContent, openModal, closeModal, headerContent, setHeaderContent }}>
      {children}
    </ModalContext.Provider>
  );
};
