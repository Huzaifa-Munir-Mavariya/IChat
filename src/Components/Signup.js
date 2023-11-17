import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const {loggedin, setLoggedin} = props;
    const Navigate = useNavigate();

    const [Credentials, setCredentials] = useState({name:"",email:"",password:"",CPassword:""});

    const createAccount = async (e) => {
        e.preventDefault();
        const {name,email,password,CPassword} = Credentials;
        if(password === CPassword){
            const response = await fetch("https://ichat-z2u6.onrender.com/signup",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({name,email,password})
        })
        const json = await response.json();

        if(json=="That user Exists"){
            alert("That user exists")
        }else{
            alert("User Created");
            console.log(json);
            localStorage.setItem("email", email);
            setLoggedin(true);
            Navigate("/")
        }
        
        }else{
            alert("Your passwords does'nt match")
        }
    }

    const onChange = (e) => {
        setCredentials({...Credentials, [e.target.name]:e.target.value});
    }

  return (
    <div>
      <form onSubmit={createAccount} className='col-md-7 my-5 container'>
                <h2>Create an account to use IMessenger</h2>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Name</label>
                    <input type="text" onChange={onChange} class="form-control" id="name" name='name' />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" onChange={onChange} class="form-control" id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" onChange={onChange} class="form-control" id="password" name='password' />
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" onChange={onChange} class="form-control" id="CPassword" name='CPassword' />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default Signup
