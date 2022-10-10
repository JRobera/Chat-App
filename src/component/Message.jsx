import React from "react";

function MessageLeft(props) {
    return <p className="chat-left">{props.chat}</p>
}

function MessageRight(props) {
    return <p className="chat-right p2">{props.chat}</p>
}

export {MessageLeft, MessageRight};