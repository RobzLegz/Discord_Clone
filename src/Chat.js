import React, { useEffect, useState } from 'react';
import "./Chat.css";
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import SendIcon from '@material-ui/icons/Send';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/counter/appSlice';
import { selectUser } from './features/counter/userSlice';
import db from "./firebase";
import firebase from "firebase";

function Chat() {
    const channelId = useSelector(selectChannelId);
    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if(channelId){
            db.collection("channels").doc(channelId).collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ));
        }
    }, [channelId]);

    const sendMessage = e => {
        e.preventDefault();
        db.collection("channels").doc(channelId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });
        setInput("");
    };

    return (
        <div className="chat-container">
            <ChatHeader channelName={channelName}/>
            <div className="chat-messages">
                {messages.map((message) => (
                    <Message timestamp={message.timestamp} message={message.message} user={message.user} />
                ))}
            </div>
            <div className="chat-input">
                <AddCircleIcon font-size="large" />
                <form>
                    <input disabled={!channelId} value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder={`Message #${channelName}`}/>
                    <button disabled={!channelId} onClick={sendMessage} className="message-button" type="submit"><SendIcon font-size="large"/></button>
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
