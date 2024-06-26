import { RegistrationProps } from "./registrationTypes";
import { useState } from "react";
const Registration: React.FC<RegistrationProps> = ({loading, error, registration}: RegistrationProps) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const userData = { username, email, password };
        const response = await registration(userData);
        console.log('Registration Successful:', response); 
      } catch (error) {
        console.error('Registration Failed:', error); 
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          Register
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  };
  
  export default Registration;