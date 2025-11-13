import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = ({ onSignUp }) => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        // In a real app, you'd have registration logic here
        onSignUp();
        navigate('/dashboard');
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Create an Account</h2>
                <p>Join our platform to easily manage your car services.</p>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="user@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="********" />
                    </div>
                    <button type="button" onClick={handleSignUp}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;