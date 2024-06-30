interface CharacterTypes {
  character: string;
  state?: boolean;
}

const Character = ({ character, state }: CharacterTypes) => {
  return (
    <span className={`character ${state === undefined ? '' : state ? 'correct' : 'incorrect'}`}>
      {character}
    </span>
  );
};

export default Character;
