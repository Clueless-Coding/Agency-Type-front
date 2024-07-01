import Timer from '../timer/timer';
import Text from '../text/Text';
import useLogic from '../../hooks/useLogic';
import ModalComponent from '../modal/modal';
import ModalContent from '../modal/modalContent';

const Content = () => {
    const {
        checkCharacter,
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
    } = useLogic();

    const handleContentClick = () => {
        if (!wordFocused) {
            setWordFocused(true);
        }
    };

    return (
        <div className="content" onClick={handleContentClick}>
            {!wordFocused && (
                <div className="overlay">
                    <p>Click to start typing</p>
                </div>
            )}
            <Timer timer={timer} reset={resetTimer} />
            <Text text={word} check={checkCharacter} cursorPosition={cursorPosition} />
            <ModalComponent type='results' isOpen={modalIsOpen} closeModal={closeModal}>
                <ModalContent results={results} />
            </ModalComponent>
            <button className="restart-button" onClick={() => restartTest()}>Restart</button>
        </div>  
    );
};

export default Content;