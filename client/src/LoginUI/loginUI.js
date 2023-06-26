import React from 'react';
import axios from 'axios';
import './loginUI.css';

function LoginBox() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const response = await axios.post('/login', { email, password });

            // Login successful, redirect to home page or perform other actions
            console.log('Login successful:', response.data);
          window.location.href='/home'
        } catch (error) {
            // Login failed, display error message or perform other actions
            console.error('Error during login:', error.response.data);
        }
    };

    return (
        <div className="login-box">
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input required name="email" type="text" />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input required name="password" type="password" />
                    <label>Password</label>
                </div>
                <button className="button" type="submit">Submit</button>
            </form>
            <br />
            <a href="/signUp" className="a2">Sign up!</a>
            <br />
            <a href="/restore" className="a2">Forgot Password</a>
        </div>
    );
}

export default LoginBox;
