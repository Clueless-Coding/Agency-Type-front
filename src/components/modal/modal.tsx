import Modal from 'react-modal';
import { ModalProps } from './modalTypes';

const ModalComponent = ({ children, isOpen, type, closeModal }: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      className="modal-custom"
      overlayClassName="modal-overlay-custom"
    >
      <div className="modal-content-custom">
        {children}
        <button className="close-button" onClick={() => closeModal(type)}>Close</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;