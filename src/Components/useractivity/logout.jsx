import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/user_slice.js';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;