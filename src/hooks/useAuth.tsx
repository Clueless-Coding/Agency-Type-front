import { useState } from "react"
import { User } from "../resourses/types"
import { Navigate } from "react-router-dom"
import Nav from "../components/nav"

const useAuth = () => {
    const [token, setToken] = useState<string | null>()
    const auth = (token: string) =>{
        console.log(token)
        setToken(token);
        console.log(token)
        localStorage.setItem('token', token)
    }
    const logout = () => {
        setToken(null)
        localStorage.removeItem('user')
    }
    const getUser = () => {
        return localStorage.getItem('token')
    }
    return {
        token, setToken, auth, logout, getUser
    }
}
export default useAuth