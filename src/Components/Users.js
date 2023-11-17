import React, { useEffect, useState } from 'react'
import UserItem from './UserItem'

const Users = (props) => {

  const [users, setUsers] = useState([]);
  
  const fetchUsers = async (e) => {
    const response = await fetch("https://ichat-z2u6.onrender.com/fetchUsers",{
      method:"GET",
      "Content-Type" : "application/json"
    })
    const json = await response.json();
    setUsers(json);
    console.log(json);
  }

  useEffect(()=>{
    fetchUsers();
  },[])

try {
  setTimeout(() => {
    fetchUsers();
  }, 3000);

  
} catch (error) {
  
}
  
  

  

  

  return (
    <div className='container col-md-9'>
      <div className='row'>
        <center className='my-3'><h2>Chat with your friends and Family all around the world</h2></center>
      {users.map((user)=>{
        return <div className='col-md-4'>
          <UserItem name={user.name} email={user.email} loggedin={props.loggedin} setReciever={props.setReciever} password={user.password}/>
        </div>
      })}
      </div>
    </div>
  )
}

export default Users;
