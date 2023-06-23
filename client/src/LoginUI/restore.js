import React from 'react';
import './loginUI.css';

function LoginBox() {
    return (
        <div className="login-box">
            <p>Forgot Password</p>
            <form>
                <div className="user-box">
                    <input required name="email" type="text" />
                    <label>Enter Email</label>
                </div>
                <div className="user-box">
                    <input required name="phonenumber" type="tel" />
                    <label>Phone Number</label>
                </div>
                <div className="user-box">
                    <input required name="code" type="text" />
                    <label>Verification Code</label>
                </div>
                <button className="button">Submit</button>
            </form>
            <br/>
            <a href="/" className="a2">Back</a>
            <br/>
        </div>
    );
}

export default LoginBox;
