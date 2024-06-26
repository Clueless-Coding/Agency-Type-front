import { ApiResponse, ErrorType, RegistraTionCredentials } from "../../resourses/types";

export interface RegistrationProps {
    error: ErrorType | null,
    loading: boolean,
    registration:  (credentials: RegistraTionCredentials) => Promise<ApiResponse>,
}