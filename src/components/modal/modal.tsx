import Modal from 'react-modal'
import { ModalProps } from './modalTypes'
const ModalComponent = ({children, isOpen, type, closeModal}: ModalProps) =>{
    return (
    <>
        <Modal isOpen={isOpen}>
            <div className='modal-content'>{children}</div>  
            <button onClick={() => closeModal(type)}>close</button>  
        </Modal>
    </>
    )
}
export default ModalComponent