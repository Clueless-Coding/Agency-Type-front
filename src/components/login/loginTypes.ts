import { LoginCredentials, ApiResponse, ErrorType, User } from "../../resourses/types";
export interface LoginProps{
    error: ErrorType | null,
    loading: boolean,
    login:  (credentials: LoginCredentials) => Promise<ApiResponse>,
    auth: (userData: User) => void,
}