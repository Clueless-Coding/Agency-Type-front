import { ReactNode } from "react";
import { ResultsProps } from "../results/resultsTypes";

export interface ModalProps{
    type: string;
    isOpen: boolean;
    children: ReactNode;
    closeModal: (close: string) => void;
}
export interface ModalContentProps{
    results: ResultsProps;
}