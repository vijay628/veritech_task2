import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Login = ({ onLogin }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy authentication logic (replace with actual authentication logic)
        if (mobileNumber === '1234567890' && password === 'password') {
            setIsLoggedIn(true);
            onLogin(); // Notify parent component of successful login
        } else {
            setError('Invalid mobile number or password');
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/chat" />; // Redirect to chat window after successful login
    }

    return (
        <div style={{width:'30%', margin:'auto',backgroundColor:'#a3e0e0', marginTop:'20vh'
        ,display:'flex', flexDirection:'column',alignItems:'center',borderRadius:'10px'}}>
            <h2>Login</h2>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" id="mobileNumber"
                       value={mobileNumber}
                       onChange={(e) => setMobileNumber(e.target.value)} aria-describedby="mobileHelp" />
                    <div id="mobileHelp" className="form-text">We'll never share your mobile number with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label htmlFor="password" class="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
