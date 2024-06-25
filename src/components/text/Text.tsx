import { useCallback, useMemo, useState } from "react"
import {TextProps, WordTypes } from "./TextTypes"
import Character from "../character/character" 

const Text = ({text, check, cursorPosition}: TextProps) => {
    const characters = useMemo(() => {
        return text.split('')
    }, [text])
    return (
        <>
            <div className="user-typed-container">
            {characters.map((letter, i) => {
                return (
                        <span key={i}>
                            <Character state={check(i)} character={letter} />
                            {i + 1 === cursorPosition && <span className="cursor">|</span>}
                        </span>
                    )
            })}
            </div>
        </>
    )
}
export default Text