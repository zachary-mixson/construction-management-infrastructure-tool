import React, { useState } from 'react';
import './loginUI.css';

function Restore() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform necessary actions (e.g., send verification code, update password)
        // Here, you can make API calls to the server using axios or fetch

        // Reset the form after successful submission
        setEmail('');
        setPhoneNumber('');
        setVerificationCode('');
    };

    return (
        <div className="login-box">
            <p>Forgot Password</p>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input
                        required
                        name="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Enter Email</label>
                </div>
                <div className="user-box">
                    <input
                        required
                        name="phonenumber"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <label>Phone Number</label>
                </div>
                <div className="user-box">
                    <input
                        required
                        name="code"
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                    />
                    <label>Verification Code</label>
                </div>
                <button className="button" type="submit">Submit</button>
            </form>
            <br/>
            <a href="/" className="a2">Back</a>
            <br/>
        </div>
    );
}

export default Restore;
