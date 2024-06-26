import { useState, useCallback } from "react"
import useWord from "./useWord";
import useKeyDown from "./useKeydown"
import useTimer from "./useTimer";
import { useModal } from "./useModal";
import { accuracy, calculateWPM } from "../utils";
import useAxios from "./useAxios";
const useLogic = () => {
    interface Results {
        accuracy: number;
        wpm: number;
        cpm: number;
        error: number,
        history: number;
    }
    const [wordFocused, setWordFocused] = useState<boolean>(true)
    const [time, setTime] = useState(10000)
    const {timer, resetTimer, startTimer} = useTimer(time)
    const [results, setResults] = useState<Results>({
        accuracy: 0,
        wpm: 0,
        cpm: 0,
        error: 0,
        history: 0,
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
    } = useWord(1)
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
    const {
        modalIsOpen,
        openModal,
        closeModal,
    } = useModal()
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
            error: 0,
            history: 0,
        })
        openModal('results');
        restartTest();
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
        modalIsOpen,
        closeModal,
        openModal,
        results,
    }
}
export default useLogic