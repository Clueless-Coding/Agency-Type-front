import Text from "../text/Text"
import Timer from "../timer/timer"
import useLogic from "../../hooks/useLogic"
import ModalComponent from "../modal/modal"
import ModalContent from "../modal/modalContent"
import useAxios from "../../hooks/useAxios"
import { LoginCredentials, Results, User } from "../../resourses/types"
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
        setWordFocused,
        wordFocused,
        setTypingState,

    } = useLogic()
    return (
        <>
            <div className="content" onClick={() => setWordFocused(true)}>
                <Timer timer={timer} reset={resetTimer}/>
                <Text
                    text={word}
                    check={checkCharacter}
                    cursorPosition={cursorPosition}
                />
                <ModalComponent type='results' isOpen={modalIsOpen} closeModal={closeModal} >
                    <ModalContent results={results}   />
                </ModalComponent>
    
            </div>
            <button onClick={() => restartTest()}>Restart</button>
        </>
    )
}
export default Content