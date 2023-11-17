import React from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const Navigate = useNavigate();

    const onLogin = () => {
        Navigate("/login");

    }

    const onLogout = () => {
        localStorage.clear("email");
        props.setLoggedin(false);
        Navigate("/login")
    }

    const onSignup = () => {
        Navigate("/signup")
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg mb-1 navbar-dark bg-dark mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">IMessenger</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>    
                        </ul>

                        {props.loggedin && <button onClick={onLogin} className="btn btn-success mx-1" type="submit">{localStorage.getItem("email")}</button>}

                        {!props.loggedin ? <form className="d-flex">
                            <button onClick={onLogin} className="btn btn-success mx-1" type="submit">Login</button>
                            <button onClick={onSignup} className="btn btn-success mx-1" type="submit">Signup</button>
                        </form>: <button onClick={onLogout} className="btn btn-success mx-1" type="submit">Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
