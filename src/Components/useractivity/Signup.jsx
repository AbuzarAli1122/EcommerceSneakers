import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './loginsignup.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/user_slice.js';

const Signup = () => {
    const [Name, setName] = useState('');
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userState  = useSelector((state) => state.user);
    const { isLoading, error } = userState || { isLoading: false, error: null };

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        const userData = { Name,userName,email, password };
        dispatch(registerUser(userData)).then((response) => {
            if (!error) {
                // Navigate to the login page upon successful signup
                navigate('/login');
            }
        });
    };

    return (
        <div className="bodyp">
            <div className='signup-container'>
                <h2>Signup</h2>
                <form onSubmit={handleSignup}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>UserName:</label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div>
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className='btn' type="submit" disabled={isLoading}>Submit</button>
                    {error && <p className="error">{error.message ? error.message : error}</p>}
                    <p>
                        Already have an account?
                        <Link to="/login"> Login </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
