export type ApiResponse = {
    data: any,
    message: string,
    token: string,
    user_id: number,
}
export type ResultsResponse = {
    data: any,

}
export type ErrorType = {
    message: string,
}
export type LoginCredentials = {
    login: string,
    password: string,
}
export type RegistraTionCredentials = {
    login: string,
    password: string,
}
export type User = {
    id: number,
    username: string,
}
export type Results= {
    accuracy: number;
    wpm: number;
    cpm: number;
    mistakes: number,
    count_words: number,
}
export interface AccuracyMetrics {
    correctChars: number;
    errors: number;
    accuracy: number;
  }
export type ResultsArray = {
    id: number,
    user_id: number,
    game_mode: string,
    'start-time': string,
    duration: number,
    mistakes: number,
    accuracy: number,
    wpm: number,
}