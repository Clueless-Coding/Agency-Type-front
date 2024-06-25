import Text from "../text/Text"
import Timer from "../timer/timer"
import useLogic from "../../hooks/useLogic"
const Content = () => {
    const {
        checkCharacter,
        charTyped,
        word,
        cursorPosition,
        restartTest,
        timer,
        resetTimer,
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
            </div>
            
        </>
    )
}
export default Content