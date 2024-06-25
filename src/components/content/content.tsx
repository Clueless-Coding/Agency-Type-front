import Text from "../text/Text"
import Timer from "../timer/timer"
import useLogic from "../../hooks/useLogic"
import ModalComponent from "../modal/modal"
import ModalContent from "../modal/modalContent"
const Content = () => {
    const {
        checkCharacter,
        charTyped,
        word,
        cursorPosition,
        restartTest,
        timer,
        resetTimer,
        modalIsOpen,
        openModal,
        closeModal,
        results,
    } = useLogic()

    return (
        <>
            <div className="content">
                <Timer timer={timer} reset={resetTimer}/>
                <Text
                    text={word}
                    check={checkCharacter}
                    cursorPosition={cursorPosition}
                />
                <ModalComponent type='results' isOpen={modalIsOpen}>
                    <ModalContent results={results}/>
                </ModalComponent>
            </div>
            
        </>
    )
}
export default Content