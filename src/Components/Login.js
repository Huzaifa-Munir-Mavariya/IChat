import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

const Login = (props) => {

    const {loggedin, setLoggedin} = props;

    const Navigate = useNavigate();

    const [Credentials, setCredentials] = useState([]);

    const onLogin = async (e) => {
        e.preventDefault();
        const {email,password} = Credentials;
        const response = await fetch("https://ichat-z2u6.onrender.com/login",{
            method:"POST",
            headers:{
                "Content-Type" : "Application/Json"
            },
            body:JSON.stringify({email,password})
        })
        const json = await response.json();
        
        if(json === "Invalid Credentials"){
            Navigate("/")
            alert("Invalid Credentials");
        }else{
            setLoggedin(true)
            localStorage.setItem("email",email);
            props.setAlertType("success")
            props.setAlertMessage("You are logged in")
            Navigate("/")
        }
    }

    const onChange = (e) => {
        setCredentials({...Credentials, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <form onSubmit={onLogin} className='col-md-7 container my-5'>
                <h2 className='my-2'>Login to use IMessenger</h2>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" onChange={onChange} class="form-control" id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" onChange={onChange} class="form-control" id="password" name='password' />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            
            </form>
        </div>
    )
}

export default Login
