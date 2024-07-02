import React, { useState } from "react";
import { LoginProps } from "./loginTypes";
import { LoginCredentials } from "../../resourses/types";

const Login: React.FC<LoginProps> = ({ loading, error, loginCall, auth }: LoginProps) => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const credentials: LoginCredentials = { login, password };
            const response = await loginCall(credentials);
            auth(response.token, response.user_id); 
            console.log('Login successful:', response);
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    className="form-input"
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    placeholder="Password"
                    required
                />
                <button type="submit" className="form-button" disabled={loading}>
                    Login
                </button>
            </form>
            {error && <p>{error.message}</p>}
        </div>
    );
}

export default Login;