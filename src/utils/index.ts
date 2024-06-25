import {faker} from '@faker-js/faker' 
interface Accuracy{

}
export const isAllowedCode = (code: string) => {
    return (
        code.startsWith('key') ||
        code === 'Backspace ' ||
        code === 'Space'
    );
};
export const generateWord = (n: number): string => {
    return faker.word.words(n);
}
export const accuracy = () => {

}
export const calculateWPM = (typedWord: string, time: number) => {
    const minutes = time / 60000
    const wordsTyped = typedWord.length / 5
    const rawWPM = wordsTyped / minutes;
    const results = {
        wpm: rawWPM,
        cpm: typedWord.length / minutes
    }
    return results
}
