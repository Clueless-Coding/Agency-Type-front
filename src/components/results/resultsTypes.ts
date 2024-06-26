export interface ResultsProps {
    wpm: number;
    cpm: number;
    accuracy: number;
    error: number;
    history: number,
}
export interface ResultCardProps {
    results: ResultsProps;
}
