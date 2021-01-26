import React from 'react';
import "./Message.css";
import {Avatar} from "@material-ui/core";

function Message() {
    return (
        <div className="message-container">
            <Avatar />
            <div className="message-info">
                <h4>Bigger<span className="timestamp">time</span></h4>
                <p>Massage</p>
            </div>
        </div>
    )
}

export default Message
