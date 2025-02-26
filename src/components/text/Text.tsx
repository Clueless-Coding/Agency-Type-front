import React, { useMemo } from 'react';
import { TextProps } from './TextTypes';
import Character from '../character/character';

const Text: React.FC<TextProps> = ({ text, check, cursorPosition }: TextProps) => {
    const words: string[] = useMemo(() => text.split(/\s+/), [text]);

    const renderCharacters = (): JSX.Element[] => {
        const renderedElements: JSX.Element[] = [];
        let characterIndex = 0;

        words.forEach((word, wordIndex) => {
            word = word + ' ';
            renderedElements.push(
                <div key={wordIndex} className="word-container">
                    {word.split('').map((letter) => {
                        const charIndex = characterIndex;
                        characterIndex++;
                        return (
                            <Character
                                key={charIndex}
                                state={check(charIndex)}
                                character={letter}
                                cursor={cursorPosition === charIndex}
                            />
                        );
                    })}
                </div>
            );
        });

        return renderedElements;
    };

    return (
        <div className="user-typed-container">
            {renderCharacters()}
        </div>
    );
};

export default Text;