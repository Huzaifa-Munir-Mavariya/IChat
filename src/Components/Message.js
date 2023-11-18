import React, { useEffect, useState } from 'react'
import SenderMessage from './SenderMessage';
import RecieverMessage from './RecieverMessage';

const Message = (props) => {

    const [SenderMessages, setSenderMessages] = useState([]);
    const [RecieverMessages, setRecieverMessages] = useState([]);
    const [Message, setMessage] = useState({message:""});

    const fetchSenderMessages = async () => {
        const senderEmail = localStorage.getItem("email");
        const recieverEmail = props.recieverEmail;
        const response = await fetch("https://ichat-z2u6.onrender.com/fetchChatSender",{
            method:"POST",
            headers:{
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ senderEmail, recieverEmail })
        })
        const json = await response.json();
        setRecieverMessages(json);
        console.log(json);

    }

    useEffect(() => {
        fetchSenderMessages();
    }, []);


    const fetchMessages = async () => {
        const senderEmail = localStorage.getItem("email");
        const recieverEmail = props.recieverEmail;
        const response = await fetch("https://ichat-z2u6.onrender.com/fetchChat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ senderEmail, recieverEmail })
        })
        const json = await response.json();
        setSenderMessages(json);
        console.log(json);
    }

    useEffect(() => {
        fetchMessages();
    }, []);

    const sendMessage = async (e) => {
        e.preventDefault();
        const {message} = Message;
        const senderEmail = localStorage.getItem("email");
        const recieverEmail = props.recieverEmail;

        console.log(message)
        console.log(senderEmail)
        console.log(recieverEmail)

        const response = await fetch("https://ichat-z2u6.onrender.com/addChat",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body:JSON.stringify({Message:message,senderEmail,recieverEmail})
        })
        const json = await response.json();
        console.log(json)
        fetchMessages();
        fetchSenderMessages();
        
    }

    const onChange = (e) => {
        setMessage({...Message, [e.target.name]:e.target.value});
    }

    setTimeout(() => {
        fetchMessages();
    }, 2000);

    setTimeout(() => {
        fetchSenderMessages()
    }, 2000);

    return (
        <div className='m-3'>
            <div className='col-md-6 container' style={{ border: "3px solid black", textAlign: 'center', marginTop: "100px", borderRadius: "15px", minHeight: "400px" }}>
                <strong>{props.recieverEmail}</strong>
                <div style={{ display: "flex", justifyContent: "center", minHeight: "400px" }}>
                    <div className='my-2' style={{ minHeight: "380px", width: "45%", margin: "10px"}}>
                    {SenderMessages.map((Message) => {
                            return <SenderMessage id={Message._id} Message={Message.Message} />
                        })}
                    </div>

                    <div className='my-2' style={{ minHeight: "380px", width: "45%", margin: "10px"}}>
                    {RecieverMessages.map((Message) => {
                            return <RecieverMessage Message={Message.Message} />
                        })}
                    </div>
                </div>

            </div>
            <form className='my-2 col-md-12 fixed-bottom' style={{ justifyContent: "center", display: 'flex' }}>
                <div class="mb-3 col-md-5">
                    <input type="text" class="form-control" onChange={onChange} id="message" name='message' aria-describedby="emailHelp" />
                </div>
                <button onClick={sendMessage} type="submit" style={{ height: "42px", width: "85px" }} class="mx-2 btn btn-dark">Send</button>
            </form>
        </div>
    )
}

export default Message
