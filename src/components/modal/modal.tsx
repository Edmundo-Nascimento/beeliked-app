import { useModal } from '../../context/modal/modal-context';

const Modal = () => {
  const { isOpen, modalContent, closeModal, headerContent }: any = useModal();

  return (
    <div className={`modal-wrapper ${isOpen ? 'show' : ''}`}>
      <div className="modal">
        <div className="modal-header">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>{headerContent?.title}</h2>
          <p>{headerContent?.description}</p>
        </div>
        <div className="modal-body">
          {modalContent}
        </div>
      </div>
    </div>
  );
};

export default Modal;
