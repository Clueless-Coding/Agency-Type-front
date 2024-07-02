import axios, { AxiosError } from "axios";
import { useState } from "react";
import { ErrorType, ApiResponse, LoginCredentials, Results, RegistrationCredentials, ResultsResponse } from "../resourses/types"
import { BASE_URL } from "../resourses/constants";
const useAxios = () => {
    const [error, setError] = useState<ErrorType | null>(null);
    const [loading, setLoading] = useState(false)
    const axiosInstance = axios.create({
        baseURL: "",
        timeout: 1000,
    })
    const handleError = (err: AxiosError<ErrorType>) => {
        const errorMessage = err.response?.data.message || err.message;
        setError({ message: errorMessage });
        setLoading(false);
      };
    const registrationCall = async (credentials: RegistrationCredentials): Promise<ApiResponse> => {
        setLoading(true);
        try {
          const response = await axiosInstance.post<ApiResponse>(`${BASE_URL}register`, credentials);
          setLoading(false);
          return response.data;
        } catch (error) {
          handleError(error as AxiosError<ErrorType>);
          throw error;
        }
      };
      const loginCall = async (credentials: LoginCredentials): Promise<ApiResponse> => {
        setLoading(true)
        try {
            const response = await axiosInstance.post<ApiResponse>(`${BASE_URL}login`, credentials)
            setLoading(false)
            return response.data
        } catch (error){
            handleError(error as AxiosError<ErrorType>)
            throw error;
        }
      }
      const submitTest = async (token:string, results: Results): Promise<ApiResponse> => {
        console.log(results)
        try{
            console.log("sent results")
            const response = await axiosInstance.post<ApiResponse>(`${BASE_URL}results`, results, {headers: {token}} )
            return response.data
        } catch(error) {
            handleError(error as AxiosError<ErrorType>)
            throw error
        }  
      }
      const getResults = async (user_id: number): Promise<ResultsResponse> => {
        try {
            const response = await axiosInstance.get<ResultsResponse>(`${BASE_URL}results` ,{params: {
                user_id
            }})
            return response
        } catch(eroror) {
            handleError(error as AxiosError<ErrorType>)
            throw error
        }
      } 
    return {
        loading,
        error,
        registrationCall,
        loginCall,
        submitTest,
        getResults
    }
}
export default useAxios
/* */