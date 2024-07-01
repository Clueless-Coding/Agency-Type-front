import React, { useState } from "react";
import { RegistrationProps } from "./registrationTypes";
import { RegistrationCredentials } from "../../resourses/types";

const Registration: React.FC<RegistrationProps> = ({ loading, error, registration }: RegistrationProps) => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const credentials: RegistrationCredentials = { login, password };
            const response = await registration(credentials);
            console.log('Registration Successful:', response); 
        } catch (error) {
            console.error('Registration Failed:', error); 
        }
    };

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
                    Register
                </button>
            </form>
            {error && <p>{error.message}</p>}
        </div>
    );
};

export default Registration;