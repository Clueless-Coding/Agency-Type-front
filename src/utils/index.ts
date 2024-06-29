import {faker} from '@faker-js/faker' 
import { AccuracyMetrics } from '../resourses/types';
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
export const calculateAccuracy = (expectedWord: string, typedWord: string) => {
    let correctChars = 0;
    for (let i = 0; i < typedWord.length; i++) {
      if (typedWord[i] === expectedWord[i]) {
        correctChars++;
      }
    }
    console.log(correctChars)
    const accuracyMetrics: AccuracyMetrics = {
      correctChars,
      incorrectChars: typedWord.length - correctChars,
      accuracy: (correctChars / typedWord.length) * 100,
    };
    return accuracyMetrics;
  };
export const calculateWPM = (typedWord: string, time: number, accuracy: number) => {
    console.log()
    const minutes = time / 60000
    const wordsTyped = typedWord.length / 5
    const rawWPM = wordsTyped / minutes;
    const netWpm = Math.round(rawWPM * (accuracy / 100))
    const results = {
        wpm: netWpm,
        cpm: typedWord.length / minutes
    }
    return results
}
