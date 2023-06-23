import React, {useState} from 'react';
import './loginUI.css';



function SignUp() {

    const [details,setDetails] = useState([]);
    const handleChange = (e) => {
        const{name,value} = e.target;
        setDetails((prev)=>{
            return{...prev,[name]:value}
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);

        // Make HTTP request to the server
        fetch('/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: details.username,
                password: details.password,
                phonenumber: details.phonenumber
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                console.log(data);
                // Add your own logic here based on the response from the server
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };



    return (
        <div className="login-box">
            <p>Create User</p>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input required name="email" type="text" onChange={handleChange} />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input required name="username" type="text" onChange={handleChange} />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input required name="phonenumber" type="tel" onChange={handleChange}/>
                    <label>Phone Number</label>
                </div>
                <div className="user-box">
                    <input required name="birthday" type="date" onChange={handleChange} />
                    <label></label>
                </div>
                <div className="user-box">
                    <input required name="password" type="password" onChange={handleChange} />
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input required name="password" type="password" onChange={handleChange} />
                    <label>Confirm Password</label>
                </div>
                <button className="button">Submit</button>
            </form>
            <br/>
            <a href="/" className="a2">Back</a>
        </div>
    );
}

export default SignUp;
