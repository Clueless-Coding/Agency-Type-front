import Nav from "../components/nav"
import Content from "../components/content"
import Profile from "../components/profile/profile"
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useAxios from "../hooks/useAxios"
import Login from "../components/profile"
import Registration from "../components/register/registration"
import useRoutes from "../hooks/useRoutes"
const App: React.FC = () => {
    const {loading, error, registrationCall, loginCall,} = useAxios()
    const {user, setUser, login, logout} = useAuth()
    const {handleLogin} = useRoutes()
    return (
        <>
        <Nav/>
        <Routes>
            <Route path="/" element={<Navigate to="/test"/>}/>
            <Route path="/test" element={<Content/>}/>
            {user ? (
                <>
                    <Route path="/profile" element={<Profile/>}/>
                    <Navigate to={"/profile"} replace/>
                </>
            ) : 
            (
                <>
                    <Route path="/login"
                        element={
                        <Login
                            auth={login}
                            error={error}
                            loading={loading}
                            login={loginCall} 
                        />}
                    />
                    <Route path="/registration"
                        element={
                        <Registration
                        error={error}
                        loading={loading}
                        registration={registrationCall}
                        />}
                    />
                </>
            )}
        </Routes>
        </>
    )
}
export default App
/* */