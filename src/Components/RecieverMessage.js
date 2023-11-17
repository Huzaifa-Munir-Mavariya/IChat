import React from 'react'

const RecieverMessage = (props) => {
    return (
        <div>
            <div className="container my-2" style={{ width: "90%",fontSize:"12px", backgroundColor: "#7088AA", borderRadius: "7px", color: "white" }}>
                {props.Message}
            </div>
        </div>
    )
}

export default RecieverMessage
