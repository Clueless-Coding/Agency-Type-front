import ResultCard from "../results/results";
import { ModalContentProps } from "./modaTypes";
const ModalContent = ({results, history}: ModalContentProps) => {
    return (
        <>
            <ResultCard results={results}/>
        </>
    )
}
export default ModalContent