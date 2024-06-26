import { useNavigate } from "react-router-dom";

const useRoutes = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('./profile')
    }
    const handleLogout = () => {
        navigate('./login')
    }
    return {
        handleLogin, handleLogout
    }
}
export default useRoutes