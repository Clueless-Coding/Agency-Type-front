import { ResultCardProps } from "./resultsTypes";

const ResultCard = ({results}: ResultCardProps) => {
    return (
        <>
            {results.cpm}
            <br />
            {results.wpm}
            <br />
            {results.accuracy}
            <br />
            {results.error}
        </>
    )
}
export default ResultCard