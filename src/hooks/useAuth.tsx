import { useState } from "react";

const useAuth = () => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token') || null);
    const [id, setId] = useState<number>(localStorage.getItem('id') ? parseInt(localStorage.getItem('id')!) : 0);

    const auth = (token: string, user_id: number) => {
        setToken(token);
        setId(user_id);
        localStorage.setItem('token', token);
        localStorage.setItem('id', user_id.toString());
        console.log('Token stored:', token);
    }

    const logout = () => {
        setToken(null);
        setId(0);
        localStorage.removeItem('token');
        localStorage.removeItem('id');
    }

    return {
        setToken,
        token,
        auth,
        logout,
        id
    }
}

export default useAuth;