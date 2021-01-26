import React from 'react';
import "./Chat.css";
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import SendIcon from '@material-ui/icons/Send';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';

function Chat() {
    return (
        <div className="chat-container">
            <ChatHeader />
            <div className="chat-messages">
                <Message />
            </div>
            <div className="chat-input">
                <AddCircleIcon font-size="large" />
                <form>
                    <input type="text" placeholder="Message bbbsh"/>
                    <button className="message-button" type="submit"><SendIcon font-size="large"/></button>
                </form>
                <div className="input-icons">
                    <CardGiftcardIcon font-size="large"/>
                    <GifIcon font-size="large"/>
                    <EmojiEmotionsIcon font-size="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat;
