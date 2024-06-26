import { useState } from "react"
import { LoginProps } from "./loginTypes"
const Login: React.FC<LoginProps> = ({loading, error, login, auth}: LoginProps) => {
    const [username, setusername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const credentials = {username, password}
            const response = await login(credentials)
            console.log('Login succesful:', response)
            auth(response.data)
        } catch (error) {
            console.error('Login failed:', error)
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="username"
                value={username}
                onChange={(input) => setusername(input.target.value)}
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
        </form>
        <button type="submit" disabled={loading}>
            Login
        </button>
        {error && <p>{error.message}</p>}
        </>
    )
}
export default Login