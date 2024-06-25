interface CharacterTypes {
    character: string
    state?: boolean;
}
const Character = ({character, state}: CharacterTypes) => {
    return (
        <>
            <span className="character" style={{color: state === undefined ? "" : state ===  true ? "white" : "red"}} >{character}</span> 
        </>
    )
}
export default Character