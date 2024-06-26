import { useCallback, useState } from "react"

export const useModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const openModal = useCallback((type: string) => {
        if(type === 'results') setModalIsOpen(true) 
    }, [])
    const closeModal = useCallback((type: string) => {
        if(type === 'results') setModalIsOpen(false)
    }, [])
    return {modalIsOpen, openModal, closeModal}
}