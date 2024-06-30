import { ResultCardProps } from './resultsTypes';

const ResultCard = ({ results }: ResultCardProps) => {
  return (
    <div className="result-card">
      <div className="result-item">WPM: {results.wpm}</div>
      <div className="result-item">CPM: {results.cpm}</div>
      <div className="result-item">Accuracy: {results.accuracy}%</div>
      <div className="result-item">Errors: {results.error}</div>
    </div>
  );
};

export default ResultCard;