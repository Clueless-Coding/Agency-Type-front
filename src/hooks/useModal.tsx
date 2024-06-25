import { useCallback, useState } from "react"

export const useModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const openModal = useCallback((type: string) => {
        if(type === 'result') setModalIsOpen(true) 
    }, [])
const closeModal = useCallback((type: string) => {
    if(type === 'result') setModalIsOpen(false)
}, [])
    return {modalIsOpen, openModal, closeModal}
}