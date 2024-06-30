export type ApiResponse = {
    data: any,
    message: string,
    token: string,
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
    error: number,
    history: number;
}
export interface AccuracyMetrics {
    correctChars: number;
    errors: number;
    accuracy: number;
  }