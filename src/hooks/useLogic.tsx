import { useState, useCallback } from "react"
import useWord from "./useWord";
import useKeyDown from "./useKeydown"
import useTimer from "./useTimer";
import { accuracy, calculateWPM } from "../utils";
const useLogic = () => {
    interface Results {
        accuracy: number;
        wpm: number;
        cpm: number;
    }
    const [wordFocused, setWordFocused] = useState<boolean>(true)
    const [time, setTime] = useState(15000)
    const {timer, resetTimer, startTimer} = useTimer(time)
    const [results, setResults] = useState<Results>({
        accuracy: 0,
        wpm: 0,
        cpm: 0,
    })
    const {
        charTyped,
        setCharTyped,
        typingState,
        cursorPosition,
        resetCursorPosition,
        setTypingState,
        resetCharTyped,
    } = useKeyDown(wordFocused)
    const {
        word,
        updateWord,
        setTotalWord,
        totalWord,
    } = useWord(30)
    const restartTest = useCallback(() => {
        resetTimer();
        resetCharTyped();
        resetCursorPosition();
        setCharTyped('');
        setTypingState('idle');
        updateWord(true);
    }, [
        resetTimer,
        resetCharTyped,
        resetCursorPosition,
        setTypingState,
        updateWord
        
    ])
    if(word.length === charTyped.length){
        updateWord();
        resetCharTyped();
        resetCursorPosition();
    }
    if(typingState === 'start'){
        setTypingState('typing')
        startTimer()
    }
    if(timer === 0){
        console.log("пошел нахуй")
        const {wpm, cpm} = calculateWPM(totalWord, charTyped.length)
        setResults({
            accuracy: 0,
            wpm,
            cpm,
        })
    }   
    const checkCharacter = useCallback((i: number) => {
        if(charTyped[i] === word[i]){
            return true;
        } else if(charTyped[i] === undefined){
            return true;  
        } return false
            
    }, [charTyped, word])
    return {
        timer,
        resetTimer,
        checkCharacter,
        charTyped,
        word,
        cursorPosition,
        restartTest,

    }
}
export default useLogic