export type UserData = {
    username: string,
    password: string,
    email?: string,
}
export type ApiResponse = {
    data: any,
    message: string,
    token: string,
}
export type ErrorType = {
    message: string,
}
export type LoginCredentials = {
    username: string,
    password: string,
}
export type RegistraTionCredentials = {
    username: string,
    password: string,
}
export type User = {
    id: number,
    username: string,
}