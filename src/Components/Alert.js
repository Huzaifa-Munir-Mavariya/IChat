import React from 'react'

const Alert = (props) => {
    return (
        <div>

            {props.msg && <div class={"alert alert-${props.type} alert-dismissible fade show"} style={{marginTop:'50px'}} role="alert">
                <strong>Holy guacamole!</strong> {props.msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}

export default Alert