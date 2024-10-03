import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./loginsignup.css";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        
    };

    return (
        
        <div className="bodyp">
            <div className='login-container'>
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
        </div>
    );
};

export default Login;
