import { useState } from "react"
import { User } from "../resourses/types"
import { Navigate } from "react-router-dom"
import Nav from "../components/nav"

const useAuth = () => {
    const [user, setUser] = useState<User | null>()
    const auth = (userData: User) =>{
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData))
    }
    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }
    const getUser = () => {
        return localStorage.getItem('user')
    }
    return {
        user, setUser, auth, logout, getUser
    }
}
export default useAuth