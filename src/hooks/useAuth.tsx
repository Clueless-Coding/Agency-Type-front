import { useState } from "react"
import { User } from "../resourses/types"

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null)
    const login = (userData: User) =>{
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData))
    }
    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }
    return {
        user, setUser, login, logout
    }
}
export default useAuth