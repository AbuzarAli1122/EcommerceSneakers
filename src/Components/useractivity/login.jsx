import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styling.css";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        // Add logic to handle login, e.g., API call
        console.log('Login details:', { email, password });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className='btn' type="submit">Submit</button>
                <p>
                Don't have an account?
                <button >
                    
                    <Link to="/signup" > Signup </Link>

                </button>
            </p>
            </form>
        </div>
    );
};

export default Login;
