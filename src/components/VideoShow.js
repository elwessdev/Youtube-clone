import React from 'react';
import {Link} from "react-router-dom";

export default function VideoShow({title,channelName,channelImg,thum,movingThumbnails,views,date,VideoId,ChannelId}){
    return(
        <Link to={"/video/"+VideoId} href='#' className='video-show'>
            <div className='thumbnail'>
                <img src={thum} alt={title} />
                <p className='video-duration'>16:42</p>
            </div>
            <div className='video-details'>
                <img className='channel-img' src={channelImg} alt={channelName} />
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