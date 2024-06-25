import { useCallback, useState } from "react";
import {generateWord} from '../utils/index'
const useWord = (numberOfWords: number) => {
    const [word, setWord] = useState<string> (
        () => generateWord(numberOfWords) + ' '
    )
    const [totalWord, setTotalWord] = useState<string>(word);
    const appendWord = useCallback((word: string) => {
        setTotalWord((prev) => prev + word)
    }, [])
    const eraseWord = useCallback((word: string) => {
        setWord(word)
    }, [])
    const updateWord = useCallback((erase = false) => {
        setWord(() => {
            const genWord = generateWord(numberOfWords) + ' '
            if (erase) eraseWord(genWord)
            else appendWord(genWord)
            return genWord
        })
    }, [numberOfWords, appendWord, eraseWord])
    return {
        word,
        updateWord,
        setTotalWord,
        appendWord,
        totalWord,
    }
}
export default useWord