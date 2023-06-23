import React from 'react';
import './loginUI.css';

function LoginBox() {
return (
<div className="login-box">
    <p>Login</p>
    <form>
        <div className="user-box">
            <input required name="email" type="text" />
            <label>Email</label>
        </div>
        <div className="user-box">
            <input required name="password" type="password" />
            <label>Password</label>
        </div>
        <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
        </a>
    </form>
        <br/>
        <a href="/signUp" className="a2">Sign up!</a>
        <br/>
        <a href="/restore" className="a2">Forgot Password</a>
</div>
);
}

export default LoginBox;
