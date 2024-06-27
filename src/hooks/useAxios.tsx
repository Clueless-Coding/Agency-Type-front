import axios, { AxiosError } from "axios";
import { useState } from "react";
import { ErrorType, ApiResponse, LoginCredentials, User, Results, RegistraTionCredentials } from "../resourses/types";
import { BASE_URL } from "../resourses/constants";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";
const useAxios = () => {
    const [error, setError] = useState<ErrorType | null>(null);
    const [loading, setLoading] = useState(false)
    const {auth} = useAuth()
    const axiosInstance = axios.create({
        baseURL: "",
        timeout: 1000,
    })
    const handleError = (err: AxiosError<any>) => {
        const errorMessage = err.response?.data.message || err.message;
        setError({ message: errorMessage });
        setLoading(false);
      };
    const registrationCall = async (credentials: RegistraTionCredentials): Promise<ApiResponse> => {
        setLoading(true);
        try {
          const response = await axiosInstance.post<ApiResponse>(`${BASE_URL}register`, credentials);
          setLoading(false);
          return response.data;
        } catch (error) {
          handleError(error as AxiosError<any>);
          throw error;
        }
      };
      const loginCall = async (credentials: LoginCredentials): Promise<ApiResponse> => {
        setLoading(true)
        try {
            const response = await axiosInstance.post<ApiResponse>(`${BASE_URL}login`, credentials)
            setLoading(false)
            console.log(response)
            return response.data
        } catch (error: any){
            handleError(error as AxiosError<any>)
            throw error;
        }
      }
      const submitTest = async (user: User, results: Results): Promise<ApiResponse> => {
        try{
            const response = await axiosInstance.post<ApiResponse>('', user )
            return response.data
        } catch(error: any) {
            handleError(error as AxiosError<any>)
            throw error
        }  
      }
    return {
        loading,
        error,
        registrationCall,
        loginCall,
        submitTest,
    }
}
export default useAxios
/* */