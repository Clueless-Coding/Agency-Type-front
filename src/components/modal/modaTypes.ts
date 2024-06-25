import { ReactNode } from "react";
import { ResultsProps } from "../results/resultsTypes";

export interface ModalProps{
    isOpen: boolean;
    children: ReactNode;
}
export interface ModalContentProps{
    results: ResultsProps;
    history: ''
}