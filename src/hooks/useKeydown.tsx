import { useCallback, useEffect, useState } from "react";
import  {isAllowedCode}  from "../utils/index";
import useCursor from "./useCursor";
type TypingState = 'idle' | 'start' | 'typing'
const useKeyDown = (active: boolean) => {
    const [typingState, setTypingState] = useState<TypingState>('idle')
    const [charTyped, setCharTyped] = useState<string>('') 
    const {cursorPosition, updateCursorPosition, resetCursorPosition} = useCursor();
    const handleKeyDown = useCallback(
        ({key, code}: KeyboardEvent) => {
            if(!active || !isAllowedCode) return;
            if (key === 'Backspace') {
                if (charTyped.length > 0 && cursorPosition > 0) {
                  setCharTyped((prev) => prev.slice(0, charTyped.length - 1));
                  updateCursorPosition('decrease');
                }
                return;
              }
            
              if (typingState === 'idle') {
                setTypingState('start');
              }
              if(key.length === 1){
                setCharTyped((prev) => prev + key);
                updateCursorPosition('increase');
              } 
            },
        [active, charTyped.length, cursorPosition, updateCursorPosition, typingState]
    )
    const resetCharTyped = useCallback(() => {
        setCharTyped('');
    }, [setCharTyped])
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown )
    })
    return {
    charTyped,
    typingState, 
    setTypingState,
    cursorPosition,
    updateCursorPosition,
    resetCharTyped,
    resetCursorPosition,
    setCharTyped,
    }
}
export default useKeyDown
