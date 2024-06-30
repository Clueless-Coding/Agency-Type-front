import { LoginCredentials, ApiResponse, ErrorType, User } from "../../resourses/types";
export interface LoginProps{
    error: ErrorType | null,
    loading: boolean,
    
    loginCall:  (credentials: LoginCredentials) => Promise<ApiResponse>,
    logout:  () => void,
    auth: (token: string) => void,
}