import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import Channel from "./Channel";
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetIcon from '@material-ui/icons/Headset';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import db, { auth } from "./firebase";

function Sidebar() {

    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    const addChannelHan = () => {
        const channelName = prompt("Enter a new channel name");
        if(channelName){
            db.collection("channels").add({
                channelName: channelName,
            });
        }
    };

    useEffect(() => {
        db.collection("channels").onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h3>CodeRoom</h3>
                <ExpandMoreIcon />
            </div>
            <div className="channels">
                <div className="channels-header">
                    <div className="sidebar-header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon onClick={addChannelHan} className="sidebar-addChannel" />
                </div>
                <div className="channels-list">
                    {channels.map((channel) => (
                        <Channel />
                    ))}
                </div>
            </div>
            <div className="profile-container">
                <Avatar onclick={() => auth.signOut()} src={user.photo}/> 
                <div className="profile-info">
                    <h3>{user.displayname}</h3>
                    <p>#{user.uid.substring(0, 4)}</p>
                </div>
                <div className="profile-icons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
