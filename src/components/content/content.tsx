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
        closeModal,
        results,
        setWordFocused,
        wordFocused,
        setTime,
    } = useLogic();

    const handleContentClick = () => {
        if (!wordFocused) {
            setWordFocused(true);
        }
    };

    return (
        <div className="content-container">
            <div className="content" onClick={handleContentClick}>
                {!wordFocused && (
                    <div className="overlay">
                        <p>Click to start typing</p>
                    </div>
                )}
                <div className='timer-settings-container'>
                    <button onClick={() => {
                        setTime(15000)
                        restartTest()}
                        }>15</button>
                    <button onClick={() => {
                        setTime(30000)
                        restartTest}
                        }>30</button>
                    <button onClick={() => {
                        setTime(60000)
                        restartTest()}
                        }>60</button>
                </div>
                <div className="timer-container">
                    <Timer timer={timer} reset={resetTimer} />
                </div>
                <Text text={word} check={checkCharacter} cursorPosition={cursorPosition} />
                <ModalComponent type='results' isOpen={modalIsOpen} closeModal={closeModal}>
                    <ModalContent results={results} />
                </ModalComponent>
                <button className="restart-button" onClick={() => restartTest()}>Restart</button>
            </div>
        </div>
    );
};

export default Content;