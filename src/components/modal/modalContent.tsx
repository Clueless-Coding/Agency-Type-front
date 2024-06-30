import ResultCard from '../results/results';
import { ModalContentProps } from './modalTypes';

const ModalContent = ({ results }: ModalContentProps) => {
  return (
      <div className="result-card-container">
        <ResultCard results={results} />
      </div>
  );
};

export default ModalContent;