import { ResultCardProps } from "./resultsTypes";

const ResultCard = ({results}: ResultCardProps) => {
    return (
        <>
            {results.cpm}
            <br />
            {results.wpm}
        </>
    )
}
export default ResultCard