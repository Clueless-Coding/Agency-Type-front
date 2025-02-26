import { useState } from "react";
const useCursor = () => {
    const [cursorPosition, setCursorPosition] = useState(0)
    const resetCursorPosition = () => {
        setCursorPosition(0)
    }
    const updateCursorPosition = (opt: 'increase' | 'decrease') => {
        if(opt === 'increase') {
            setCursorPosition((cursor) => cursor + 1)
        } else {
            setCursorPosition((cursor) => cursor -1)
        }
    }
    return {
        cursorPosition, 
        updateCursorPosition,
        resetCursorPosition
    }
}
export default useCursor