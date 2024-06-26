import axios, { AxiosError } from "axios";
import { useState } from "react";
import { ErrorType, UserData, ApiResponse, LoginCredentials } from "../resourses/types";
const useAxios = () => {
    const [error, setError] = useState<ErrorType | null>(null);
    const [loading, setLoading] = useState(false)
    
    const axiosInstance = axios.create({
        baseURL: "",
        timeout: 10000,
    })
    const handleError = (err: AxiosError<any>) => {
        const errorMessage = err.response?.data.message || err.message;
        setError({ message: errorMessage });
        setLoading(false);
      };
    const registrationCall = async (userData: UserData): Promise<ApiResponse> => {
        setLoading(true);
        try {
          const response = await axiosInstance.post<ApiResponse>('/api/register', userData);
          setLoading(false);
          return response.data;
        } catch (error) {
          handleError(error as AxiosError<any>);
          throw error; // Rethrow the error to handle in component
        }
      };
      const loginCall = async (credentials: LoginCredentials): Promise<ApiResponse> => {
        setLoading(true)
        try {
            const response = await axiosInstance.post<ApiResponse>('', credentials)
            setLoading(false)
            return response.data
        } catch (error: any){
            handleError(error as AxiosError<any>)
            throw error;
        }
      }
      const submitTest = async () => {
        
      }
    return {
        loading,
        error,
        registrationCall,
        loginCall,
    }
}
export default useAxios