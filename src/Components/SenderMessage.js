import React from 'react'

const SenderMessage = (props) => {
    const deleteMessage = async () => {
        const id = props.id;
        const response = await fetch("https://ichat-z2u6.onrender.com/deleteChat",{
            method:"DELETE",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify({id})
        })
        const json = response.json();
        console.log(json);

    } 
    return (
        <div>
            <div className="container my-2" style={{ width: "90%", backgroundColor: "#3270C8", borderRadius: "7px", color: "white", fontSize:"12px" }}>
                {props.Message}
                <i onClick={deleteMessage} class="fa-solid fa-trash fa-fade mx-1" style={{color: "#ff0000"}}></i>
            </div>
        </div>
    )
}

export default SenderMessage
