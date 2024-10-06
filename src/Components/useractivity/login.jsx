import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import "./loginsignup.css";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/user_slice.js';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
  const { isLoading, error } = useSelector((state) => state.user);


  const handleLogin = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ email, password }));
    
    // Check if the login was successful
    if (loginUser.fulfilled.match(resultAction)) {
        // Navigate to the home page upon successful login
        navigate('/home');
    }
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
                <button className='btn' type="submit" disabled={isLoading} >Submit</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
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
