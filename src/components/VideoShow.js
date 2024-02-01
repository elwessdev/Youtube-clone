import React from 'react';
import {Link} from "react-router-dom";

export default function VideoShow({title,channelName,channelThum,videoThum,vidLength,views,date,VideoId,ChannelId}){
    // console.log(verifyChannel)
    return(
        <Link to={"/video/"+VideoId} href='#' className='video-show'>
            <div className='thumbnail'>
                <img src={videoThum} alt={title} />
                <p className='video-duration'>{vidLength}</p>
            </div>
            <div className='video-details'>
                <img className='channel-img' src={channelThum} alt={channelName} />
                <div className='vid-txt'>
                    <h3>{title}</h3>
                    <Link to={"/channel/"+ChannelId}>{channelName}</Link>
                    <div className='vid-txt-nums'>
                        <span>{views}K views</span>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
};