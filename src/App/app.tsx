import Nav from "../components/nav"
import Content from "../components/content"
import Profile from "../components/profile/profile"
import { Route, Routes, Navigate} from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useAxios from "../hooks/useAxios"
import Login from "../components/profile"
import Registration from "../components/register/registration"
const App: React.FC = () => {
    const {loading, error, registrationCall, loginCall, getResults} = useAxios()
    const { auth, logout, id, token} = useAuth()
    const CreateAccount = () => {    
        return (
            <>
            <Login
                    auth={auth}
                    error={error}
                    loading={loading}
                    loginCall={loginCall} 
                    logout={logout}
            />
            <Registration
                        error={error}
                        loading={loading}
                        registration={registrationCall}
            />
            </>
        )
    } 
    return (
        <>
        <Nav/>
        <Routes>
            <Route path="/" element={<Navigate to="/test"/>}/>
            <Route path="/test" element={<Content/>}/>
            <Route path="/profile" element={token ? <Profile getResults={getResults} logout={logout} user_id={id}/> : <CreateAccount/>}/>
        </Routes>
        </>
    )
}
export default App
