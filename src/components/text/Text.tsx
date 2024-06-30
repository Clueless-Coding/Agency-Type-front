import { useMemo } from 'react';
import { TextProps } from './TextTypes';
import Character from '../character/character';


const Text = ({ text, check, cursorPosition }: TextProps) => {
  const characters = useMemo(() => text.split(''), [text]);

  return (
    <div className="user-typed-container">
      {characters.map((letter, i) => (
        <span key={i}>
          <Character state={check(i)} character={letter} />
          {i + 1 === cursorPosition && <span className="cursor">|</span>}
          {/\s/.test(letter) && <wbr />} {}
        </span>
      ))}
    </div>
  );
};

export default Text;