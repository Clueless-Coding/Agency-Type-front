import ResultCard from "../results/results";
import { ModalContentProps } from "./modalTypes";
const ModalContent = ({results, history}: ModalContentProps) => {
    console.log("results")
    return (
        <>
            <ResultCard results={results}/>
           
        </>
    )
}
export default ModalContent