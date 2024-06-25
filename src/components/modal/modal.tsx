import Modal from 'react-modal'
import { ModalProps } from './modaTypes'
const ModalComponent = ({children, isOpen}: ModalProps) =>{
    return (
    <>
        <Modal isOpen={isOpen}>
            <div>
                {children}
            </div>
        </Modal>
    </>
    )
}
export default ModalComponent