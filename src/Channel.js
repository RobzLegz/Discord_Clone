import React from 'react';
import "./Channel.css";
import {useDispatch} from "react-redux";
import {setChannelInfo} from "./features/counter/appSlice";

function Channel({id, channelName}) {

    const dispatch = useDispatch()

    return (
        <div className="channel" onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
        }))}>
            <h4><span className="channel-hashtag">#</span>{channelName}</h4>
        </div>
    )
}

export default Channel;
