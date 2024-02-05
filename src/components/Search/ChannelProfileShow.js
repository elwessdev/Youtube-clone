import React from 'react';
import {Link} from "react-router-dom";

export default function ChannelProfileShow({channelID,channelPic,channelName,channelSubs}){
    return(
        <Link to={"/channel/"+channelID} className='channel-profile-show'>
            <img src={`https:${channelPic}`} alt={channelName} />
            <h3>{channelName}</h3>
            <span>{channelSubs}</span>
        </Link>
    )
};