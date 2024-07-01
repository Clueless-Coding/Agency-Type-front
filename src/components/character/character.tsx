interface CharacterTypes {
  character: string;
  state?: boolean;
  cursor: boolean;
}

const Character = ({ character, state, cursor }: CharacterTypes) => {

  return (
    <span style={{ borderLeft: cursor ? '2px solid white' : '1px solid #404040'}} className={`character ${state === undefined ? '' : state ? 'correct' : 'incorrect'}`}>
      {character}
    </span>
  );
};

export default Character;
