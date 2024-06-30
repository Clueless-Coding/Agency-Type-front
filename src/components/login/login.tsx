import { useState } from "react"
import { LoginProps } from "./loginTypes"
import { Navigate } from "react-router-dom"
import { LoginCredentials } from "../../resourses/types"
const Login: React.FC<LoginProps> = ({loading, error, loginCall, logout, auth}: LoginProps) => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            const credentials: LoginCredentials = {login, password}
            const response = await loginCall(credentials)
            auth(response.token)
            console.log('Login succesful:', response)
        } catch (error) {
            console.error('Login failed:', error)
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="username"
                value={login}
                onChange={(input) => setLogin(input.target.value)}
                placeholder='username'
                required
            />
            <input
                type="password"
                value={password}
                onChange={(input) => setPassword(input.target.value)}
                placeholder='password'
                required
            />
            <button type="submit" disabled={loading} >
            Login
            </button>   
        </form>
        <button onClick={() => logout()}>logout</button>
        {error && <p>{error.message}</p>}
        </>
    )
}
export default Login