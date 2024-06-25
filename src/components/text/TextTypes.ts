export interface TextProps{
    text: string; 
    check: (i: number) => boolean;
    cursorPosition: number;
    
}
export interface WordTypes {
    word: string;
}