import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserItem = (props) => {
    const {name,email} = props;
    const Navigate = useNavigate();

    const onClick = () => {
        if(props.loggedin){
            props.setReciever(email);
            Navigate("/Message")
        }else{
            alert("You are not logged in. please log in")
        }
        
    }

    return (
        <div>
            <div class="card col-md-9 my-3" style={{height: "150px"}}>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{email}</p>
                        <button onClick={onClick} class="btn btn-primary btn-sm">Start chat</button>
                    </div>
            </div>
        </div>
    )
}

export default UserItem
