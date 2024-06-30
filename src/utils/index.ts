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
export const calculateAccuracy = (expectedWord: string, typedWord: string, totalTyped: string) => {
    let correctChars = 0;
    let incorrectChars = 0;
    for (let i = 0; i < typedWord.length; i++) {
      if (typedWord[i] === expectedWord[i]) {
        correctChars++;
      } else {
        incorrectChars++;
      }
    }
    const accuracyMetrics: AccuracyMetrics = {
      correctChars,
      errors: incorrectChars + (totalTyped.length - typedWord.length),
      accuracy: (correctChars / typedWord.length) * 100,
    };
    return accuracyMetrics;
  };
  export const calculateWPM = (typedText: string, time: number, accuracy: number) => {
    const minutes = time / 60000;
    const wordsTyped = typedText.split(/\s+/).length; 
    const rawWPM = wordsTyped / minutes;
    const netWpm = Math.round(rawWPM * (accuracy / 100));
    const results = {
      wpm: netWpm,
      cpm: (typedText.length / minutes) * (accuracy / 100),
    };
  
    return results;
  };