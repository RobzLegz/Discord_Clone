import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import Channel from "./Channel";
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetIcon from '@material-ui/icons/Headset';

function Sidebar() {
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
                    <AddIcon className="sidebar-addChannel" />
                </div>
                <div className="channels-list">
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                </div>
            </div>
            <div className="profile-container">
                <Avatar /> 
                <div className="profile-info">
                    <h3>BiggerBob</h3>
                    <p>#8808</p>
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
