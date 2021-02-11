import React from 'react'

function ErrorComp(props) {
    if(props.err)
    return (
        <span className="text-danger font-italic ">{props.err_msg}</span>
    )
}

export default ErrorComp
