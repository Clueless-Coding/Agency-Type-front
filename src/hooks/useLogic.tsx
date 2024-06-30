import { useState, useCallback, useEffect } from "react"
import useWord from "./useWord";
import useKeyDown from "./useKeydown"
import useTimer from "./useTimer";
import { useModal } from "./useModal";
import { calculateAccuracy, calculateWPM } from "../utils";
import { Results } from "../resourses/types";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
const useLogic = () => {
    const [wordFocused, setWordFocused] = useState<boolean>(false)
    const [time, setTime] = useState(10000)
    const {timer, resetTimer, startTimer} = useTimer(time)
    const {submitTest, loginCall} = useAxios()
    const {getUser} = useAuth()
    const token = getUser()
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
        totalCharTyped,
        setTotalChartyped
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
        setTotalChartyped('')
    }, [
        resetTimer,
        resetCharTyped,
        resetCursorPosition,
        setCharTyped,
        setTypingState,
        updateWord,
        setTotalChartyped,
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
    if(typingState === 'start' && wordFocused === true){
        setTypingState('typing')
        startTimer()
    }
    if(timer === 0){
        const acc = calculateAccuracy(word, charTyped, totalCharTyped)
        console.log(acc)
        const {wpm, cpm} = calculateWPM(charTyped, time, acc.accuracy)
        setResults({
            accuracy: acc.accuracy,
            wpm,
            cpm,
            error: acc.errors,
            history: 0,
        })
        openModal('results');
        setWordFocused(false)
        token && submitTest(token, results)   
        restartTest();
    }   
    const checkCharacter = useCallback((i: number) => {
        if(charTyped[i] === word[i]){
            return true;
        } else if(charTyped[i] === undefined){
            return true;  
        } else {
            return false;
        }
            
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
        setWordFocused,
        wordFocused,
        setTypingState,
        typingState,
        submitTest,
        loginCall
    }
}
export default useLogic